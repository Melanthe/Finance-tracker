'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser } from '../user';
import { useState } from 'react';
import 'navigation.css';

export const Navigation: React.FC = () => {
    const router = useRouter();
    const { user } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Accounts', href: '/accounts' },
        { label: 'Categories', href: '/categories' },
        { label: 'Profile', href: '/profile' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="nav-wrapper bg-accent">\
                <svg className="logo" width="30" height="30">
                    <image href="/public/logo.svg" width="30" height="30" />
                </svg>

                <nav className="items-wrapper">
                    {/* Desktop Menu */}
                    <ul className="items-wrapper">
                        {navItems.map((item) => (
                            <li key={item.href} className="item">
                                <Link
                                    href={item.href}
                                    className="item-link"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Hamburger Icon */}
                    <button
                        className="menu-icon"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg>
                            <image href="/public/menu.svg" width="30" height="30" />
                        </svg>
                    </button>
                </nav>
            </header>

            {/* Mobile Sidebar */}
            {isMenuOpen && (
                <div className="sidebar-wrapper">
                    {/* Overlay */}
                    <div
                        className="overlay"
                        onClick={closeMenu}
                    ></div>

                    {/* Sidebar */}
                    <div className="sidebar">
                        <ul className="items-wrapper">
                            {navItems.map((item) => (
                                <li key={item.href} className="item">
                                    <Link
                                        href={item.href}
                                        className="item-link"
                                        onClick={closeMenu}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};
