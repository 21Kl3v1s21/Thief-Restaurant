"use client";
import React, { useState } from 'react';
import './events.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from 'swiper/modules';
import { events } from '../data/data';
import SectionTitle from '../components/SectionTitle';
import EventsItem from '../components/EventsItem';

export default function Events() {
    type Slide = {
        id: number;
        image: string;
        title: string;
        price: string;
        content: string;
        details: string[];
        summary: string;
    };
    const [slides] = useState<Slide[]>(
        events.map(event => ({
            ...event,
            details: Array.isArray(event.details) ? event.details : event.details.split('\n').filter(Boolean),
        }))
    );

  return (
    <section id='events' className='events'>
        <div className='container' data-aos='fade-up'>
            <SectionTitle title='Events' subtitle='Our Amazing Event Offers'/>
            <div data-aos='fade-up' data-aos-delay='100'>
                <Swiper spaceBetween={0}
                autoplay={{
                    delay:5000,
                    disableOnInteraction:false,
                }}
                pagination={{
                    el:'.swiper-pagination',
                    type:'bullets',
                    clickable:true,
                }}
                modules={[Autoplay, Pagination]}
                loop={true}
                className='events-slide swiper-container'>
                    {slides && 
                    slides.length > 0 && slides.map((slide: {
                        id:number;
                        image:string;
                        title:string;
                        price:string;
                        content:string;
                        details:string[];
                        summary:string;
                    }) => (
                        <SwiperSlide key={slide.id}>
                            <EventsItem item={slide}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='swiper-pagination'></div>
            </div>
        </div>
    </section>
  )
}
