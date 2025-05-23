'use client';

import React, { useEffect } from 'react';
import './galleryItem.css';
import Image from 'next/image';

export default function GalleryItem({
  item,
}: {
  item: { id: number; image: string };
}) {
  useEffect(() => {
    const initLightbox = async () => {
      const GLightbox = (await import('glightbox')).default;
      GLightbox({
        selector: '.gallery-lightbox',
      });
    };

    if (typeof window !== 'undefined') {
      initLightbox();
    }
  }, []);

  return (
    <div className='col-lg-3 col-md-4'>
      <div className='gallery-item'>
        <a href={item.image} className='gallery-lightbox' data-gall='gallery-item'>
          <Image
            width={500}
            height={500}
            style={{ width: '100%', height: '300px' }}
            src={item.image}
            alt=''
            className='img-fluid'
          />
        </a>
      </div>
    </div>
  );
}
