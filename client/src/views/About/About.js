import React from 'react'
import "./About.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import about from '../../components/assets/about-us.png';
import mission from '../../components/assets/our-mission.png';
import vision from '../../components/assets//our-vision.png';


function About() {
  return (
    <>
    <Navbar/>
   
    
    <div className='animation-container' >
      {/* <div className='about-page'></div> */}
      {/* <div className='gradient-background'></div> */}
      <section className="secright ">
        <div className="paras">
          <h1 className="sectiontag text-big">About us</h1>
          <h3 className="subsectiontag text-small">Code Nest is a community platform that helps college students navigate their coding and academic journey. Code Nest goes beyond the ordinary. Not only does it provide a haven for coding enthusiasts, but it also offers a diverse array of question sets covering reasoning, aptitude, coding problems, and interview-based questions. </h3>
        </div>
        <div className="thumbnail">
          <img src={about} alt="cityimage" className="fluidimg" />
        </div>
      </section>
     

      <section className="secleft ">
        <div className="paras">
          <h1 className="sectiontag text-big">Our Vision</h1>
          <h3 className="subsectiontag text-small">At Code Nest, we envision a future brimming with talented and passionate tech professionals. We believe every college student has the potential to excel in the coding world, and we're dedicated to providing a comprehensive platform that equips them with the necessary skills, knowledge, and support.</h3>
        </div>
        <div className="thumbnail">
          <img src={mission} alt="cityimage" className="fluidimg" />
        </div>
      </section>
   

      <section className="secright ">
        <div className="paras">
          <h1 className="sectiontag text-big">Placement Preparation</h1>
          <h3 className="subsectiontag text-small"> Landing your dream job starts with thorough preparation. Code Nest offers a wealth of resources to help you prepare for interviews, including aptitude tests, interview questions, and tips for success. We'll guide you through every step of the job application process, from polishing your resume to acing the interview.</h3>
        </div>
        <div className="thumbnail">
          <img src={vision} alt="cityimage" className="fluidimg" />
        </div>
      </section>
   
    </div>
    <Footer/>
    </>
  )
}

export default About