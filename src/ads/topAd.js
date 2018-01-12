import React from 'react';
import './ads.css';

import topAdImg from '../images/ad1.jpg';

const topAd = () => {
  return (
    <div className = "topAdWrapper">
      <img id = "topAd" src = {topAdImg} alt="" />
    </div>
  );
}

export default topAd;