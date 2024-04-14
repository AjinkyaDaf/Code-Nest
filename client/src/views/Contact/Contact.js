import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Contact.css'; // Import external CSS file
import contact from "../../components/assets/contact-us.png";

const Contact = () => {
  return (
    <>
    <div className='animation-container'>
      <Navbar />
      <div className="contact-main-container">
      <div className='gradient-background'></div>
        <div className="contact-content-container">
          <div>
            <img className='contact-img' src={contact}></img>
            <h2>Contact</h2>
            <h1>Get in touch</h1>
            <p>We’d love to hear from you! Please fill out the form below.</p>
          </div>
          <div className="contact-form-container">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className='contact-form-elements'>
                <label>Full name</label>
                <input type="text"
                  placeholder='Enter your name...'
                  required />
              </div>
              <div className='contact-form-elements'>
                <label>Email</label>
                <input type="email"
                  placeholder='Enter your Email...'
                  required />

              </div>
              <div className='contact-form-elements'>
                <label>Phone number</label>
                <div>
                  <input type="number" placeholder="+91 " required />
                </div>
              </div>
              <div className='contact-form-elements'>
                <label>Feedback</label>
                <textarea required
                  placeholder='Your Valuable Feedback'></textarea>
              </div>
              <button className='contact-button' type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
       
      </div>
      <Footer />
      </div>
    </>
  );
};

export default Contact;
