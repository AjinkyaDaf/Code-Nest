import React from 'react';
import './ProjectSteps.css'; // Import the CSS file for styling
import Icon from '../../components/assets/icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectSteps = () => {
  return (
    <div className="center-container">
      <div className="project-steps-container">
        <h2>Project Steps</h2>
        <div className="steps-wrapper">
          <ul className="steps-list">
            <li>
              <span className="icon">
                <FontAwesomeIcon icon="fa-solid fa-code" style={{color: "#000000",}} />
                </span>
              <div className="step-info">
                <strong>Applied to Front End Developer</strong>
                <span className='span'>Sep 20</span>
              </div>
            </li>
            <li>
              <span className="icon"><FontAwesomeIcon icon="fa-solid fa-code" flip="both" size="la" style={{color: "#FFD43B",}} /></span>
              <div className="step-info">
                <strong>Advanced to phone screening by Bethany Blake</strong>
                <span className='span'>Sep 22</span>
              </div>
            </li>
            <li>
              <span className="icon">&#9679;</span>
              <div className="step-info">
                <strong>Completed phone screening with Martha Gardner</strong>
                <span className='span'>Sep 28</span>
              </div>
            </li>
            <li>
              <span className="icon">&#9679;</span>
              <div className="step-info">
                <strong>Advanced to interview by Bethany Blake</strong>
                <span className='span'>Sep 30</span>
              </div>
            </li>
            <li>
              <span className="icon">&#9679;</span>
              <div className="step-info">
                <strong>Completed interview with Katherine Snyder</strong>
                <span className='span'>Oct 4</span>
              </div>
            </li>
          </ul>
          <div className="vertical-line"></div> {/* Vertical line */}
        </div>
      </div>
    </div>
  );
};

export default ProjectSteps;
