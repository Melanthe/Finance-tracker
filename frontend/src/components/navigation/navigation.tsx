'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse, faRightLeft, faWallet, faTag, faChartSimple, faGear} from '@fortawesome/free-solid-svg-icons';
import './navigation.css';

type NavItem = {
  readonly label: string;
  readonly href: string;
  readonly icon?: React.ComponentType;
  readonly external?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: 'Главная', href: '/', icon: <FontAwesomeIcon icon={faHouse} /> },
  { label: 'Транзакции', href: '/transactions', icon: <FontAwesomeIcon icon={faRightLeft} /> },
  { label: 'Счета', href: '/accounts', icon: <FontAwesomeIcon icon={faWallet} /> },
  { label: 'Категории', href: '/categories', icon: <FontAwesomeIcon icon={faTag} /> },
  { label: 'Аналитика', href: '/reports', icon: <FontAwesomeIcon icon={faChartSimple} /> },
  { label: 'Настройки', href: '/settings', icon: <FontAwesomeIcon icon={faGear} /> }
];

export function Navigation() {
    const router = useRouter();

    const onItemClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        event.preventDefault();
        router.push(href);
    }

    return (
        <>
            <nav className="nav-wrapper">
                <div className="nav-header">
                    <img src="/assets/icon.svg" alt="Finny logo" width="50" height="50" />
                    <h1>Finny</h1>
                </div>

                <ul className="nav-content">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href} className="item-wrapper">
                            {item.icon && (
                                <span className="item-icon">
                                    {item.icon}
                                </span>
                            )}
                            <a href={item.href} className="item" onClick={(event) => onItemClick(event, item.href)}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}