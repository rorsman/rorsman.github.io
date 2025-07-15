'use client';
import React, { useEffect } from 'react';
import { Bebas_Neue } from 'next/font/google';

const DEFAULT_OFFSET = -80;

const navItems = [
    { label: 'About', selector: '#about', offset: DEFAULT_OFFSET - 200 },
    { label: 'Projects', selector: '#projects', offset: DEFAULT_OFFSET },
    { label: 'Skills', selector: '#skills', offset: DEFAULT_OFFSET },
];

const bebasNeue = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
    fallback: ['sans'],
});

interface NavbarProps {
    menuOpen: boolean;
    setMenuOpenAction: React.Dispatch<React.SetStateAction<boolean>>;
    scrolled: boolean;
    setScrolledAction: React.Dispatch<React.SetStateAction<boolean>>;
}

const scrollToSection = (selector: string, offset: number, scrolled: boolean) => {
    const section = document.querySelector<HTMLElement>(selector);
    if (!section) return;

    const adjustedOffset = scrolled ? DEFAULT_OFFSET : offset;
    const targetY = section.offsetTop + adjustedOffset;

    window.scrollTo({ top: Math.max(targetY, 0), behavior: 'smooth' });
};

export default function Navbar({
                                   menuOpen,
                                   setMenuOpenAction,
                                   scrolled,
                                   setScrolledAction,
                               }: Readonly<NavbarProps>) {
useEffect(() => {
    const handleScroll = () => setScrolledAction(window.scrollY > 50);
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setMenuOpenAction(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('keydown', handleKeyDown);
    };
}, [setScrolledAction, setMenuOpenAction]);

    const navbarClasses = [
        'navbar',
        menuOpen ? 'navbar-open' : 'navbar-closed',
        scrolled || menuOpen ? 'navbar-scrolled' : 'navbar-transparent',
    ].join(' ');

    return (
        <nav className={navbarClasses}>
            <div className="navbar-container">
                <div
                    className="navbar-inner"
                    style={{ maxHeight: menuOpen ? '500px' : '3rem' }}
                >
                    <div className="navbar-toggle">
                        <button
                            className="navbar-toggle-button"
                            onClick={() => setMenuOpenAction(!menuOpen)}
                        >
                            {menuOpen ? '✕' : '☰'}
                        </button>
                    </div>

                    <ul className={`navbar-list ${bebasNeue.className}`}>
                        {navItems.map(({ label, selector, offset }) => (
                            <li key={label}>
                                <button
                                    className="navbar-button"
                                    onClick={() => {
                                        scrollToSection(selector, offset, scrolled);
                                        setMenuOpenAction(false);
                                    }}
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
