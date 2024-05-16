import React, { useState, useEffect } from 'react';
import frontpic from './../frontpic.mp4';
import './Intro.css';
function  Intro (){
    const handleMoreAboutMe = () => {
        alert('More About Me button clicked!');
      };
    
    return (<>
      <div className="video-container">
     <video className="background-video"loop autoPlay muted>
        <source src={frontpic} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-text">
      Hello,I am <div className='name'>Pranjal Sharma</div><br/>A full-stack web developer.
      <button className="more-about-me-button" onClick={handleMoreAboutMe}>
        More About Me
      </button>
      </div>
    
      </div>
    </>);
}
export default Intro;