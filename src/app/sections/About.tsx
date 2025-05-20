import React from 'react';
import './about.css';
import Image from 'next/image';

export default function About() {
  return (
    <section id='about' className='about'>
        <div className='container' data-aos='fade-up'>
            <div className='row'>
                <div className='col-lg-6 order-1 order-lg-2' data-aos='zoom-in' data-aos-delay='100'>
                    <div className='about-img'>
                        <Image
                        src="/images/about.jpg"
                        alt="About"
                        width={800}
                        height={450}
                        />
                    </div>
                </div>
                <div className='col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content'>
                    <h3>
                        We are a restaurant that specializes in providing the best dining experience for our customers.
                    </h3>
                    <p className='fst-italix'>
                        Our restaurant is known for its unique and delicious dishes, made with the freshest ingredients. We take pride in our commitment to quality and customer satisfaction.
                    </p>
                    <ul>
                        <li> 
                            <i className='bi bi-check-circle'></i> Fresh, locally sourced ingredients
                        </li>
                        <li> 
                            <i className='bi bi-check-circle'></i> Cozy and welcoming atmosphere
                        </li>
                        <li> 
                            <i className='bi bi-check-circle'></i> Friendly and attentive staff
                        </li>
                    </ul>
                    <p>
                        Whether you are joining us for a family dinner, a special celebration, or a casual meal with friends, our team is dedicated to making every visit memorable. Experience the perfect blend of great food, warm hospitality, and a relaxing ambiance at our restaurant.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
