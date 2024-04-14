import React from 'react'
import ProjectForm from './ProjectForm'
import Navbar from '../Navbar/Navbar'
import ProjectCard from './ProjectCard'
import "./Projects.css"

function Projects() {
  return (
    <>
    <div className='animation-container'>
    <Navbar/>
    <div className="project-headline">
            
            <p>Welcome to our Projects Library! Explore a diverse collection of projects created by our community.<br/>To contribute your project, simply click the "Add" button, fill in the details in the form, and watch your project join the library.</p>
        </div>
        <br/>
        <hr/>
    <ProjectForm/>
    <ProjectCard/>
    </div>
    </>
  )
}

export default Projects