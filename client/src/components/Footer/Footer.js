import React, { useState } from 'react';
import './Footer.css';
import logo from '../assets/logo7.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Display dialog box for successful subscription
        setEmail(''); // Clear email input field
      } else {
        alert(data.message); // Display error message
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <footer className="footer background-gradient">

      <div className="footer-container ">
        <div className="footer-logo">
          {/* <div className="footer-logo-text">
            Code<span>Nest</span>.
          </div> */}
          <div className="logo">
            <a href='/'>
              <img src={logo} className='cn-logo' alt='logo' />
            </a>
          </div>

          <div className="footer-description">
            Coding companion for AI-powered problem-solving, tech news updates, personalized learning, project collaboration, and career guidance.
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-section-title">Address</div>
          <div className="footer-address">
            35 Remida Heights, <br />
            45 Street, <br />
            South Caroline, Nagpur
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-section-title">Links</div>
          <nav aria-label="Footer Navigation">
            <ul className="footer-links">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/newsletter">News</a>
              </li>
              <li>
                <a href="/resume-builder">Resume</a>
              </li>
              <li>
                <a href="/community">Community</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-section">
          <div className="footer-section-title">Subscribe to our Newsletter</div>
          <div>
            <input
              type="email"
              className="footer-subscribe-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="footer-subscribe-button" onClick={handleSubscribe}>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="footer-copyright-content">
          <div className="footer-copyright-text">
            © 2022 CodeNest | All Rights Reserved
          </div>
          <div className="footer-copyright-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;