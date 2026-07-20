const socialLinks = [
    { href: "https://github.com/rorsman", label: "GitHub" },
    { href: "https://linkedin.com/in/albin-rorsman-6156abb0/", label: "LinkedIn" },
];

export default function Title() {
    return (
        <div className="title-container">
            <h1 className="title-heading">
                I WRITE<br />CODE<span className="title-cursor">_</span>
            </h1>
            <div className="title-contact-links">
                {socialLinks.map(({href, label}) => (
                    <a
                        key={href}
                        className="title-contact-link"
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {label}
                    </a>
                ))}
            </div>
        </div>
    );
}
