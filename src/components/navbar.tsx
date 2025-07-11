'use client';
import { useEffect, useState } from 'react';
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${scrolled || menuOpen ? 'bg-amber-700' : 'bg-transparent'} text-white px-4 py-3`}>
            <div className="flex justify-between items-center">
                <div className="w-full transition-all duration-300 ease-in-out overflow-hidden" style={{ maxHeight: menuOpen ? '500px' : '3rem' }}>
                    <div className="flex justify-end p-2">
                        <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                    <ul className="flex flex-col items-end gap-2 px-4 pb-4 text-white">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}