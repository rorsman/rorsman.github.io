'use client';
import React, {useEffect} from 'react';
import Link from "next/link";
import {Bebas_Neue} from "next/font/google";

interface NavbarProps {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    scrolled: boolean;
    setScrolled: React.Dispatch<React.SetStateAction<boolean>>;
}

const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
    fallback: ["sans"]
});

export default function Navbar({menuOpen, setMenuOpen, scrolled, setScrolled}: Readonly<NavbarProps>) {


    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition ${menuOpen ? 'duration-100 ease' : 'duration-700 ease-in'} ${scrolled || menuOpen ? 'bg-green-500' : 'bg-transparent'} text-white px-4 py-3`}>
            <div className="flex justify-between items-center">
                <div className="w-full transition-all duration-600 ease overflow-hidden"
                     style={{maxHeight: menuOpen ? '500px' : '3rem'}}>
                    <div className="flex justify-end p-2">
                        <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                    <ul className={`flex flex-col items-end gap-2 px-4 pb-4 text-white text-3xl ${bebasNeue.className}`}>
                        <li>
                            <Link
                                href=""
                                scroll={false}
                                onClick={() => {
                                    document.querySelector('#about')?.scrollIntoView({behavior: 'smooth'});
                                    setMenuOpen(false);
                                }}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                scroll={false}
                                onClick={() => {
                                    document.querySelector('#projects')?.scrollIntoView({behavior: 'smooth'});
                                    setMenuOpen(false);
                                }}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                scroll={false}
                                onClick={() => {
                                    document.querySelector('#skills')?.scrollIntoView({behavior: 'smooth'});
                                    setMenuOpen(false);
                                }}
                            >
                                Skills
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}