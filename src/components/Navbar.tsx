'use client';
import { useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Bebas_Neue } from 'next/font/google';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
];

const bebasNeue = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
    fallback: ['sans'],
});

interface NavbarProps {
    menuOpen: boolean;
    setMenuOpenAction: Dispatch<SetStateAction<boolean>>;
    scrolled: boolean;
    setScrolledAction: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({
                                   menuOpen,
                                   setMenuOpenAction,
                                   scrolled,
                                   setScrolledAction,
                               }: Readonly<NavbarProps>) {
    useEffect(() => {
        const handleScroll = () => setScrolledAction(window.scrollY > 50);
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setMenuOpenAction(false);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [setScrolledAction, setMenuOpenAction]);

    const navbarClasses = [
        'navbar',
        scrolled || menuOpen ? 'navbar-scrolled' : 'navbar-transparent',
    ].join(' ');

    return (
        <nav className={navbarClasses} aria-label="Main navigation">
            <div className="navbar-container">
                <div
                    className={`navbar-inner ${menuOpen ? 'navbar-inner-open' : 'navbar-inner-closed'}`}
                >
                    <div className="navbar-toggle">
                        <button
                            type="button"
                            className="navbar-toggle-button"
                            onClick={() => setMenuOpenAction(!menuOpen)}
                            aria-expanded={menuOpen}
                            aria-controls="navigation-menu"
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {menuOpen ? '✕' : '☰'}
                        </button>
                    </div>

                    <ul id="navigation-menu" className={`navbar-list ${bebasNeue.className}`}>
                        {navItems.map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    className="navbar-button"
                                    onClick={() => setMenuOpenAction(false)}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
