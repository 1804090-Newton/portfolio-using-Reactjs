import React from 'react';
import log from '../assets/icon/Nicon.jpg';
import createContactForm from './contact/Contact';
import ContactForm from './contact/Contact';

const Header = () => {
  const toggleAbout = () => {
    let aboutSection = document.getElementById("about");
    
        if (aboutSection.style.display === "none") {
            aboutSection.style.display = "block";
          } else {
            aboutSection.style.display = "none";
          }
  };
  

  
  return (
    <header className="bar">
      <img src={log} alt="Logo" className="logo" />
      
      <nav className="nav-links">
        <ul>
          <li><a href="#about" onClick={toggleAbout} className="nav-item">about</a></li>
          <li><a href="#experience" className="nav-item">experience</a></li>
          <li><a href="#feature-project" className="nav-item">project</a></li> 
          <li><a href="#contact" className="nav-item" onClick={ContactForm}>contact</a></li>
        </ul>
      </nav>
      
      <span className="resume-button">
        <a className="btn1" href="#"><button>Resume</button></a>
        <a className="btn2" href="#"><button>Hire Me</button></a>
      </span>
    </header>
  );
};

export default Header;
