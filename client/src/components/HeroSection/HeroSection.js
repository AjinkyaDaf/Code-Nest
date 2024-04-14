import React, { useEffect, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [text, setText] = useState("Programming");

  useEffect(() => {
    const textLoad = () => {
      setTimeout(() => {
        setText("Artificial Intelligence");
      }, 0);
      setTimeout(() => {
        setText("Machine Learning");
      }, 2000);
      setTimeout(() => {
        setText("Cyber Security");
      }, 4000);
      setTimeout(() => {
        setText("Frontend Development");
      }, 6000);
      setTimeout(() => {
        setText("Backend Development");
      }, 8000);
      setTimeout(() => {
        setText("FullStack Development");
      }, 10000);
    };

    textLoad();
    const intervalId = setInterval(textLoad, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero-container">
      <div className="left-section">
        <div className="heading-container">
          <span className="text first-text">Learn  </span>
          <span className="text sec-text">{text}</span> 
        </div>
        <p className="description">
         Code Nest: Your coding companion for AI-powered problem-solving, tech news updates, personalized learning, project collaboration, and career guidance. Join our vibrant community, practice coding challenges, and celebrate achievements. Click "Get Started" to elevate your coding experience!
        </p>
        <a href='/signup'>
        <button className="get-started-btn">Get Started ›</button>
        </a>
      </div>
      <div className="right-section"></div>
    </div>
  );
};

export default HeroSection;
