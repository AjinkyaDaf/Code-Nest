import React from 'react';
import RoadmapCard from './RoadmapCard';
import data from './data.json';
import Navbar from '../Navbar/Navbar'

function Roadmap() {
    return (
        <>
        <div className='animation-container'>
            <div className="roadmap">
                <Navbar />
                <div className="top-section">
                    <h1><span className="text sec-text">Roadmap </span>to Tech Mastery</h1>
                    <p> Whether you're a seasoned developer, tech enthusiast, or someone keen on staying informed about the tech industry's dynamic landscape, our roadmap is your guide to mastering various aspects of technology.</p>

                    {/* <p>Whether you're a seasoned developer, tech enthusiast, or someone keen on staying informed about the tech industry's dynamic landscape, our Latest Tech News section is your gateway to the most relevant and intriguing stories in the realm of technology.</p> */}
                </div>
                <br />
                <hr />
                <RoadmapCard categories={data.categories} />
            </div>
            </div>
        </>
    );
}

export default Roadmap;
