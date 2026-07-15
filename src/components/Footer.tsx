import Image from "next/image";
import { withBasePath } from "@/config/site";

const socialLinks = [
    {
        href: "https://github.com/rorsman",
        src: "/github-mark-white.svg",
        alt: "github logo",
    },
    {
        href: "https://linkedin.com/in/albin-rorsman-6156abb0/",
        src: "/linkedin-round-white.svg",
        alt: "linkedin logo",
    },
];

export default function Footer() {
    return (
        <footer className="footer">
            {socialLinks.map(({href, src, alt}) => (
                <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        className="footer-icon"
                        src={withBasePath(src)}
                        alt={alt}
                        width={48}
                        height={48}
                    />
                </a>
            ))}
        </footer>
    );
}
