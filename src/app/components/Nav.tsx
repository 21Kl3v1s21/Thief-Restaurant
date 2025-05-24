import React, { useState } from 'react';
import './nav.css';
import { navs } from '../data/data';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

export default function Nav() {
  const [navList] = useState(navs);
  const [open, setOpen] = useState(false);
  const { user } = useUser(); // 👈 Clerk user object

  const handleToggleMenu = () => setOpen(!open);
  const handleScrollTo = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };
  const handleNavLinkClick = () => setOpen(false);

  return (
    <nav id='navbar' className={`navbar order-last order-lg-0 ${open ? 'navbar-mobile' : ''}`}>
      <ul>
        {navList.map(nav => (
          <li key={nav.id}>
            {nav.name === 'Home' ? (
              <Link
                href="/"
                className={`nav-link scrollto${nav.active ? ' active' : ''}`}
                onClick={handleNavLinkClick}
              >
                <i className='bi bi-house-door-fill'></i>
              </Link>
            ) : (
              <a
                className={`nav-link scrollto${nav.active ? ' active' : ''}`}
                onClick={() => handleScrollTo(nav.target)}
              >
                {nav.name}
              </a>
            )}
          </li>
        ))}

        <li>
          <Link
            href={user ? "/admin/bookings" : "/login"} // 👈 Conditional route
            className="px-5 text-sm text-blue-500 hover:underline"
            onClick={handleNavLinkClick}
          >
            {user ? 'Dashboard' : 'Log In'} {/* 👈 Conditional label */}
          </Link>
        </li>
      </ul>
      <i className='bi bi-list mobile-nav-toggle' onClick={handleToggleMenu}></i>
    </nav>
  );
}
