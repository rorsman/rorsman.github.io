import Head from 'next/head';
import {useState} from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Content from "@/components/content";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    return (
        <>
            <Head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
                <title>RORSMAN</title>
            </Head>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrolled={scrolled} setScrolled={setScrolled}/>
            <main
                className={`transition-all ${menuOpen ? 'duration-400 ease' : 'duration-800 ease-in'} ${!scrolled && menuOpen ? 'mt-48' : ''}`}>
                <Content/>
                <Footer/>
            </main>
        </>
    );
}