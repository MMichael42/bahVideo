import React from 'react';
import './header.css';
import logo from '../images/BAHlogo.jpg';

const header = () => {

  return (
    <div id = "header" className='headerWrapper'>
      <div className="headerImg">
        <img id="logo" src={logo} alt="" />
      </div>
      <div className="headerText">
        <span id ="headerTitle">BAHFest</span> <span id ="headerSubtitle">Video Archive</span>
      </div>
    </div>
  );
}

export default header;