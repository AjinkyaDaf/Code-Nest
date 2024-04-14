import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router
import "./Community.css"
import Navbar from '../../components/Navbar/Navbar'
import Chatbot from '../../components/Chatbot/Chatbot'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons'
import CommunityPage from '../../components/CommunityPage/CommunityPage'
import Footer from '../../components/Footer/Footer'



function Community() {
  


  return (
    <>
    <div className="animation-container">
      <Navbar />
      <div className="top-section">
        <h1>CodeNest <span className="text sec-text">CONNECT-AI <FontAwesomeIcon icon={faCircleNodes} /></span></h1>
      </div>
      <br />

      <Chatbot />
      <hr className='community-hr' />
      
      <CommunityPage />
      <hr style={{ width: '20%', marginTop: '5rem' }} />

      <Footer />
      </div>
    </>
  )
}

export default Community