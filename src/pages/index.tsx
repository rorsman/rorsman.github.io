import Head from 'next/head';
import {useState} from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import About from "@/components/About";
import GithubRepos from "@/components/GithubRepos";
import Skills from "@/components/Skills";
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    return (
        <>
            <Head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
                <title>RORSMAN</title>
            </Head>
            <Navbar menuOpen={menuOpen} setMenuOpenAction={setMenuOpen} scrolled={scrolled} setScrolledAction={setScrolled}/>
            <main
                className={`transition-all ${menuOpen ? 'duration-400 ease' : 'duration-600 ease-in'} ${!scrolled && menuOpen ? 'mt-48' : ''}`}>
                <Title/>
                <About/>
                <GithubRepos username={"rorsman"}/>
                <Skills/>
                <Footer/>
                <BackToTopButton scrolled={scrolled}/>
            </main>
        </>
    );
}