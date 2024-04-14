import React from 'react';
import './StepsBanner.css'; // Import the CSS file for styling
import Step1img from '../../assets/step-1bannerimg.png';
import Step2img from '../../assets/step-2bannerimg.png';
import Step3img from '../../assets/step-3bannerimg.png';


const StepsBanner = () => {
  return (
    <div className="steps-banner">
      <h1 className="steps-banner-heading">Three simple steps to </h1>
      <h1 className="steps-banner-heading botam-margin">build your resume</h1>
      <div className="steps-sections">
        <div className="steps-section">
          <img src={Step1img} alt="Image 1" className="steps-section-image" />
          <p className="steps-section-description">Select an ATS-friendly professionally designed resume template.</p>
        </div>
        <div className="steps-section">
          <img src={Step2img} alt="Image 2" className="steps-section-image" />
          <p className="steps-section-description">Click to add targeted content written by certified professional resume writers.</p>
        </div>
        <div className="steps-section">
          <img src={Step3img} alt="Image 3" className="steps-section-image" />
          <p className="steps-section-description">Download your resume in the file format you need and send!</p>
        </div>
      </div>
    </div>
  );
};

export default StepsBanner;
