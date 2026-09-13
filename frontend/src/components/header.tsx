'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser } from './user';

export const Header: React.FC = () => {
    const router = useRouter();
    const { user } = useUser();

    const navItems = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Accounts', href: '/accounts' },
        { label: 'Categories', href: '/categories' },
        { label: 'Profile', href: '/profile' },
    ];

    return (
        <header className="bg-white shadow">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-blue-600">Finance Tracker</div>
                    <ul className="flex gap-8">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="text-gray-700 hover:text-blue-600 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};
