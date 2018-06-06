import React from 'react';
import './siteHeader.css';
import siteLogo from '../images/siteLogo.jpg';


const siteHeader = () => {

  return (
    <div id = "siteHeader" className = "siteHeaderWrapper">
      
      <div className = "siteMenuWrap">

        <div className = "siteHeaderImg">
          <img id="logo" src={siteLogo} alt="" />
        </div>

        <div id = "siteNavWrap">
          <div id = "siteNavText">
            <ul id = "topMenu">
              <li className = "menuItem">
                <a  id = "aboutTab" href="http://bahfest.com/about">About</a>
              </li> 
              <li className = "menuItem">
                <a id = "submitTab" href="http://bahfest.com/submit-hypothesis/">Submit a Hypothesis</a>
              </li>
              <li className = "menuItem">
                <a id = "videoTab" href="http://bahfest.com/videos/">Videos</a>
              </li>
              <li className = "menuItem">
                <a id = "eventsTab" href="http://bahfest.com">Events</a>
              </li> 
            </ul>
          </div>
        </div>


      </div> 


    </div>
  );
}

export default siteHeader;