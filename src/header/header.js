import React from 'react';
import './header.css';
import logo from '../images/BAHlogo2.png';
import collage from '../images/bahHeader.png';

const header = () => {

  return (
    <div id = "header" className='headerWrapper'>
      <div className="headerImg">
        <img id="logo" src={logo} alt="" />
      </div>

      <div className="headerText">
        <span id ="headerTitle">BAHFest</span> <span id ="headerSubtitle">Video Archive</span>
      </div>

      <div className="headerCollage">
        <img id="collage" src={collage} alt="" />
      </div>
    </div>
  );
}

export default header;