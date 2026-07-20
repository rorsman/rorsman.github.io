import SectionHeader from "@/components/SectionHeader";

export default function About() {
    return (
        <section className="terminal-box" id="about">
            <SectionHeader>About</SectionHeader>
            <p className="terminal-command">{'➜  ~ cat about/rorsman.txt'}</p>
            <p>I’m a backend developer based in Stockholm, Sweden, specializing in Java and AWS. I design and build
                scalable
                services, with a focus on performance, reliability, and clean architecture. I enjoy solving complex
                problems
                and automating infrastructure using AWS services.</p>
        </section>
    );
}
