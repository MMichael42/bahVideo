import React from 'react';
import './videoPlayer.css';

const videoPlayer = (props) => {

  const videoId = props.currentVideo.embedCode;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className = "videoPlayerWrapper">

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

      <div className="shareButtons">
        <div className="fb-like" 
          data-href={props.shareURL.href} 
          data-layout="button" 
          data-action="like" 
          data-size="large" 
          data-show-faces="false" 
          data-share="true">
        </div>

        <div id="tweetButton">
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" 
          className="twitter-share-button" 
          data-size="large" 
          data-text="Check out this BAHFest talk!" 
          data-hashtags="bahfest" 
          data-show-count="false">Tweet
        </a>
        </div>
      </div>
      
      

    </div>
  );
}

export default videoPlayer;