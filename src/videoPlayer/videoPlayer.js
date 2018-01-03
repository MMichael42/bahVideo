import React from 'react';
import './videoPlayer.css';
import TopAd from '../ads/topAd';

const videoPlayer = (props) => {

  const videoId = props.currentVideo.embedCode;
  const url = `https://www.youtube.com/embed/${videoId}`;



  return (
    <div className = "videoPlayerWrapper">

      <TopAd />

      <div id = "videoFrame" className = "videoWindow">
        <div className = "videoWrap">
          <iframe title={props.currentVideo.title} src={url} frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
      
      <div className = "videoTitle">
        <b>{props.currentVideo.title}</b> by {props.currentVideo.speaker}
      </div>

      <div className = "videoDescription">
        {props.currentVideo.description}
      </div>

    </div>
  );
}

export default videoPlayer;