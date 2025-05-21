"use client";
import React, {useState, useEffect} from 'react';
import './header.css';
import AppBtn from './AppBtn';
import Nav from './Nav';
import Link from 'next/link'; // Import the Link component

export default function Header() {
    const [scroll, setScroll] = useState(0);
        
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        }; 
    }, [scroll]);

    return (
        <header id='header' className={`fixed-top d-flex align-items-center  ${scroll > 100 ? 'header-scrolled' : undefined}`}>
            <div className='container-fluid container-xl d-flex align-items-center justify-content-lg-between'>
                <h1 className='logo me-auto me-lg-0'>
                    <Link href="/">Restaurant</Link> {/* Replace <a> with <Link> */}
                </h1>
                <Nav/>
                <AppBtn name='book a table' />
            </div>
        </header>
    )
}