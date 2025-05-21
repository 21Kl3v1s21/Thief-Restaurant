import React, {useState} from 'react';
import './nav.css';
import {navs} from '../data/data';
import Link from 'next/link'; // Import the Link component

export default function Nav() {
    const [navList] = useState(navs);
    const [open, setOpen] = useState(false);

    const handleToggleMenu = () => {
        setOpen(!open);
    };

    const handleScrollTo = (section: string) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav id='navbar' className={`navbar order-last order-lg-0 ${open ? 'navbar-mobile' : undefined}`}>
            <ul>
                {navList.map(nav => (
                    <li key={nav.id}>
                        {nav.name === 'Home' ? (
                            <Link href="/" className={`nav-link scrollto${nav.active ? ' active' : ''}`}>
                                <i className='bi bi-house-door-fill'></i>
                            </Link>
                        ) : (
                            <a className={`nav-link scrollto${nav.active ? ' active' : ''}`}
                               onClick={() => handleScrollTo(nav.target)}>
                                {nav.name}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
            <i className='bi bi-list mobile-nav-toggle' onClick={handleToggleMenu}></i>
        </nav>
    )
}