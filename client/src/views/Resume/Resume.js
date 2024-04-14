import React from 'react'
import "./Resume.css"
import Navbar from '../../components/Navbar/Navbar'
import Body from '../../components/ResumeBuilder/FormBody/Body'
import Banner from '../../components/ResumeBuilder/FormBanner/Banner';

function Resume() {
  return (
    <>
    <div className='Resume'>
    <Navbar/>
    <br></br>
    
    <Banner/>
    <br></br>
    <hr></hr>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Body/>
  
  
    </div>
 
    </>

  )
}

export default Resume
