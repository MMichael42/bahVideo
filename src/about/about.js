import React from 'react';
import './about.css';

// images
import bahLogoFull from '../images/BAHlogoFull.jpg';
import zachImage from '../images/zachbah.jpg';
import figure from '../images/fig1.png';

const about = () => {
  return (
    <div className = "aboutWrapper">
      <div className = "whatIs">
        <p className = "aboutTitle">What is BAHFest?</p>
        <p className = "aboutPara">
          The Festival of Bad Ad Hoc Hypotheses (BAHFest) is a celebration of well-argued and thoroughly researched 
          but completely incorrect scientific theories. Six speakers take the stage and present their theories to 
          an illustrious panel of judges in front of a packed house.

          BAHFest has celebrated terrible ideas for four years on three continents.
        </p>
      </div>

      <div className = "belowLogo imageMargin">
        <img id = "belowLogoImg" src = {bahLogoFull} alt = "" />
      </div>

      <div className = "zachImage imageMargin">
        <img id = "zachImg" src = {zachImage} alt = "" />
      </div>

      <div className = "zachBio">
        <p className = "aboutTitle">About Zach</p>
        <p className = "aboutPara">
          BAHFest is the brainchild of sometimes artist, always curmudgeon Zach Weinersmith, 
          the auteur behind SMBC Comics. Inspired by a comic, BAHFest started as a live event in 2013 at MIT. 
          There have been 8 successful, sold out BAHFest shows from London to San Francisco.
        </p>
      </div>

      <div className = "figureImage imageMargin">
        <img id = "figImg" src = {figure} alt = "" />
      </div>

      <div className = "hypo">
        <p className = "aboutTitle">The First Hypothesis</p>
        <p className = "aboutPara">
          The idea for the festival originated in a popular cartoon that Weinersmith drew, depicting a scientist 
          presenting the argument that babies are shaped like footballs so that they can be punted over mountains 
          and thereby share hereditary material with more genetically-distinct populations living in nearby villages. 
          On a whim, he polled his Facebook fans to see if anyone might be interested in attending an event in which 
          he turned this comic into a pseudo-serious academic talk. Zach is still surprised thousands of people attend 
          this dorky show.
        </p>
      </div>

      <div className = "footer">
      &copy; BAHFest 2018
      </div>

    </div>
  );
}

export default about;