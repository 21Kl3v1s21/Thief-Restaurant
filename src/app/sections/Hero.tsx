'use client'

import React, { useEffect } from 'react'
import './hero.css'
import HeroBtn from '../components/HeroBtn'

export default function Hero() {
  useEffect(() => {
    // Import GLightbox dynamically on the client
    import('glightbox').then(({ default: GLightbox }) => {
      const lightbox = GLightbox({ selector: '.glightbox' })
      return () => lightbox.destroy()
    })
  }, [])

  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-lg-8">
            <h1>
              Welcome to Thief <span>Restaurant</span>
            </h1>
            <h2>Delicious food, unforgettable experience. Stealing your heart a bite at a time.</h2>
            <div className="btns">
              <HeroBtn name="our menu" target="menu" />
              <HeroBtn name="book a table" target="book-a-table" />
            </div>
          </div>
          <div
            className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a
              href="https://www.youtube.com/watch?v=gmHg08gfinY"
              className="glightbox play-btn"
              data-type="video"
              aria-label="Play video"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
