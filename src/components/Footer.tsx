import Link from "next/link";
import Image from "next/image";

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
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

    return (
        <div className="footer">
            {socialLinks.map(({href, src, alt}) => (
                <Link
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        className="footer-icon"
                        src={basePath + src}
                        alt={alt}
                        width={48}
                        height={48}
                    />
                </Link>
            ))}
        </div>
    );
}
