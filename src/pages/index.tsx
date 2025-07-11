import Head from 'next/head';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Content from "@/components/content";

export default function Home() {
    return (
        <>
            <Head>
                <title>RORSMAN</title>
            </Head>
            <main>
                <Navbar />
                <Content />
                <Footer />
            </main>
        </>
    );
}