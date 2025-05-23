"use client";
import React, {useState, useEffect} from 'react';
import './backToTopBtn.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function BackToTopBtn() {
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
            },  [scroll]);
    const backToTop = () => {
        window.scrollTo(0, 0);
    };
  return (
   <a onClick={backToTop}
   className={`back-to-top d-flex align-items-center justify-content-center ${scroll > 100 ? 'active' : undefined } `}>
    <i className="fas fa-utensils"></i> 
   </a>
  )
}
