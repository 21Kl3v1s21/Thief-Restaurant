'use client';
import React, { useState } from 'react';
import './footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
    }
  };

  return (
    <footer id='footer'>
      <div className='footer-top'>
        <div className='container'>
          <div className='row'>

            {/* Contact Info */}
            <div className='col-lg-6 col-md-6'>
              <div className='footer-info'>
                <h3>Restaurant</h3>
                <p>
                  21 Your Street, Your City, Postal 1234
                  <br /><br />
                  <strong>Phone:</strong> +2121210721<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
                <div className='social-links mt-3'>
                  <a href="#" className='twitter'><i className='bi bi-twitter-x'></i></a>
                  <a href="#" className='facebook'><i className='bi bi-facebook'></i></a>
                  <a href="#" className='instagram'><i className='bi bi-instagram'></i></a>
                </div>
              </div>
            </div>

            {/* Newsletter Form */}
            <div className='col-lg-6 col-md-6 footer-newsletter'>
              <h4>Our Newsletter</h4>
              <p>Subscribe to our newsletter for the latest updates.</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <input type="submit" value="Subscribe" disabled={status === 'loading'} />
              </form>
              {status === 'success' && <p className="success-msg">✅ You’re subscribed!</p>}
              {status === 'error' && <p className="error-msg">❌ Something went wrong.</p>}
            </div>

          </div>
        </div>
      </div>

      <div className='container'>
        <div className='copyright'>
          &copy; Copyright <strong><span>Restaurant</span></strong>. All Rights Reserved
        </div>
        <div className='credits'>
          Designed by <a href="#">Thief</a>
        </div>
      </div>
    </footer>
  );
}
