import React from 'react';
import './siteHeader.css';
import siteLogo from '../images/siteLogo.jpg';


var hamClicked = false;

const siteHeader = () => {


  return (
    <div id = "siteHeader" className = "siteHeaderWrapper" >
      
      <div className = "siteMenuWrap">

        <div className = "siteHeaderImg">
          <img id="logo" src={siteLogo} alt="" />
        </div>

        <div id = "siteNavWrap">

          <div id = "hamburger" onClick = {clicked}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div> {/* end of hamburger */}

          <div id = "menuDropDown">
            <ul id = "dropDownList">
              <li className = "dropDownItem">
                <a  id = "aboutTab" href="http://bahfest.com/about">About</a>
              </li>
              <li className = "dropDownItem">
                <a id = "submitTab" href="http://bahfest.com/submit-hypothesis/">Submit a Hypothesis</a>
              </li>
              <li className = "dropDownItem">
                <a id = "videoTab" href="http://bahfest.com/video-archive/">Videos</a>
              </li>
              <li className = "dropDownItem">
                <a id = "eventsTab" href="http://bahfest.com">Events</a>
              </li>
            </ul>
          </div> {/* end of menuDropDown */}

          <div id = "siteNavText">
            <ul id = "topMenu">
              <li className = "menuItem">
                <a  id = "aboutTab" href="http://bahfest.com/about">About</a>
              </li> 
              <li className = "menuItem">
                <a id = "submitTab" href="http://bahfest.com/submit-hypothesis/">Submit a Hypothesis</a>
              </li>
              <li className = "menuItem">
                <a id = "videoTab" href="http://bahfest.com/video-archive/">Videos</a>
              </li>
              <li className = "menuItem">
                <a id = "eventsTab" href="http://bahfest.com">Events</a>
              </li> 
            </ul> {/* end of topMenu */}
          </div> {/* end of siteNavText */}
        </div> {/* end of siteNavWrap */}
      </div> {/* end of siteMenuWrap */} 


    </div>
  );
}

function clicked(event) {
  // get menu element
  let dropDownMenu = document.getElementById("menuDropDown");
  let hamburger = document.getElementsByClassName("bar")
  
  // check clicked state
  if (!hamClicked){
    // if false, set true 
    hamClicked = true;
    // and add show class to dropdown
    dropDownMenu.classList.add("show");
    Array.from(hamburger).forEach( (item) => {
      item.classList.add("filledIn");
    });
  } else {
    // must be true, set to false 
    hamClicked = false;
    // and remove class to hide dropdown
    dropDownMenu.classList.remove("show");
    Array.from(hamburger).forEach( (item) => {
      item.classList.remove("filledIn");
    });
  }
  console.log("clicked");
}

export default siteHeader;