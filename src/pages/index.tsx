import Head from 'next/head';
import type { GetStaticProps } from 'next';
import {useState} from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import About from "@/components/About";
import GithubRepos from "@/components/GithubRepos";
import Skills from "@/components/Skills";
import BackToTopButton from "@/components/BackToTopButton";
import { fetchGitHubRepos, type Repo } from "@/lib/github";
import { withBasePath } from "@/config/site";

type HomeProps = {
    repos: Repo[];
    reposError: boolean;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    try {
        return {
            props: {
                repos: await fetchGitHubRepos("rorsman"),
                reposError: false,
            },
        };
    } catch (error) {
        console.error("Failed to fetch GitHub repositories:", error);
        return {
            props: {
                repos: [],
                reposError: true,
            },
        };
    }
};

export default function Home({ repos, reposError }: Readonly<HomeProps>) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    return (
        <>
            <Head>
                <link rel="icon" type="image/svg+xml" href={withBasePath("/favicon.svg")}/>
                <title>RORSMAN</title>
            </Head>
            <Navbar menuOpen={menuOpen} setMenuOpenAction={setMenuOpen} scrolled={scrolled} setScrolledAction={setScrolled}/>
            <main
                className={`transition-all ${menuOpen ? 'duration-400 ease' : 'duration-600 ease-in'} ${!scrolled && menuOpen ? 'mt-48' : ''}`}>
                <Title/>
                <About/>
                <GithubRepos repos={repos} error={reposError}/>
                <Skills/>
                <Footer/>
                <BackToTopButton scrolled={scrolled}/>
            </main>
        </>
    );
}
