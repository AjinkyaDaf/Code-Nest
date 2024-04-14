
import { Link } from 'react-router-dom';
import drop from '../assets/drop.png';
import logo from '../assets/logo7.png';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons'


import './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Check if the user is logged in
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoggedIn(true);
      setUserName(user.username);
    } else {
      setLoggedIn(false);
      setUserName('');
    }
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const logout = () => {
    // Clear user data from localStorage and update state
    localStorage.removeItem('user');
    setLoggedIn(false);
    setUserName('');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href='/'>
          <img src={logo} className='cn-logo' alt='logo' />
        </a>
      </div>

      <div className={`menu ${showMenu ? 'show' : ''}`}>
        <Link to="/"> Home</Link>
        <Link to="/newsletter"> Newsletter</Link>
        <div className="submenu">
          <Link to="/"> Resources&nbsp;<img src={drop} className='cn-drop' alt='drop-icon' /> </Link>
          <div className="dropdown-content">
            <Link to="/roadmaps">Roadmaps</Link><hr />
            <Link to="/projects">Projects</Link><hr />
            <Link to="/books">Books</Link><hr />
            <Link to="/resume-builder">Resume Builder</Link>
            {/* <Link to="/others">Others</Link> */}
          </div>
        </div>
        <div className="submenu">
          <Link to="/">Practice&nbsp;<img src={drop} className='cn-drop' alt='drop-icon' /></Link>
          <div className="dropdown-content">
            <Link to="/aptitude">Aptitude</Link><hr />
            <Link to="/reasoning">Logical Reasoning</Link><hr />
            <Link to="/verbal">Verbal Ability</Link><hr />
            <Link to="/interview-questions">Interview Questions</Link><hr />
            <Link to="/problems">Coding Problems</Link>
          </div>
        </div>
        <Link to="/community">Community</Link>
      </div>

      <div className="auth-buttons">
        {loggedIn ? (
          <>
            <p className="user-name"><FontAwesomeIcon icon={faUser} className='user-profile' /> {userName}</p>
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login <FontAwesomeIcon icon={faRightToBracket} /></Link>
            {/* <Link to="/signup">Signup</Link> */}
          </>
        )}
      </div>

      <div className="mobile-menu-icon" onClick={toggleMenu}>

        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>

      </div>
    </nav>
  );
};

export default Navbar;
