import React, { useState, useEffect } from 'react';
import {useTranslation} from "react-i18next";
import frontpic from './../frontpic.mp4';
import './Intro.css';

function  Intro (){
  const [t,i18n]=useTranslation("global")
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
    {t("home.intro1")}<div className='name'> Pranjal Sharma</div><br/>{t("home.intro2")}
      <button className="more-about-me-button" onClick={handleMoreAboutMe}>
      {t("home.moreButton")}
      </button>
      </div>
      
      </div>
    </>);
}
export default Intro;