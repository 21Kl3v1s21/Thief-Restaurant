'use client';
import React, { useState } from 'react';
import './contact.css';
import SectionTitle from '../components/SectionTitle';

export default function Contact() {
  const [result, setResult] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append('access_key', 'a213537d-07cd-4f01-824a-dc46d6b84ec8');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
console.log('Web3Forms response:', data);

    if (data.success) {
      setResult('Form Submitted Successfully');
      (event.target as HTMLFormElement).reset();
    } else {
      console.error('Error:', data);
      setResult(data.message || 'Something went wrong.');
    }
  };

  return (
    <section id="contact" className="contacts">
      <div className="container" data-aos="fade-up" data-aos-delay='100'>
        <SectionTitle title="Contact" subtitle="Contact Us" />
        <div className="contact-wrapper" data-aos="fade-up" data-aos-delay='200'>
          <iframe
            style={{ border: 0, width: '100%', height: '350px' }}
            src="https://www.google.com/maps/embed?...your-url..."
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="row mt-5">
            {/* Left: Info */}
            <div className="col col-info">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>21 Your Street, Your City, Postal 1234</p>
                </div>
                <div className="open-hours">
                  <i className="bi bi-clock"></i>
                  <h4>Open Hours</h4>
                  <p>
                    Monday-Saturday:
                    <br />
                    10:00 AM - 20:00 PM
                  </p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+47 2121210721</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="col col-form">
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
              <span>{result}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
