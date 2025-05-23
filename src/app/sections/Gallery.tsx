"use client";
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Preloader from '../components/Preloader';
import GalleryItem from '../components/GalleryItem';
import { gallery } from '../data/data'; // Make sure 'gallery' is the correct export name

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Gallery" subtitle="Some Beautiful Picture From Our Restaurant" />
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          {gallery && gallery.length > 0 ? (
            gallery.map((image: { id: number; src: string }) => (
              <GalleryItem key={image.id} item={{ id: image.id, image: image.src }}  />
            ))
          ) : (
            <Preloader />
          )}
        </div>
      </div>
    </section>
  );
}
