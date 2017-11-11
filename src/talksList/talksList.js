import React from 'react';
import './talkList.css';

const talkList = (props) => {

  const selectedStateClass = props.selectedTalk === props.title
    ? "talkListItemWrapper selectedTalkListItem"
    : "talkListItemWrapper";
  
  const thumbnailImg = `https://img.youtube.com/vi/${props.youtubeID}/0.jpg`;

  return (
    <a href="#header">
      <div className={selectedStateClass} onClick={props.click}>
        <div className="thumbnailBox">
          <img alt="" src={thumbnailImg} width="100%"/>
        </div>

        <div className="infoBox">
          <div id="speaker" className="textBox"><i>{props.speaker}</i></div>
          <div id="title" className="textBox"><b>{props.title}</b></div>
          <div id="show" className="textBox">{props.selectedShow}</div>
        </div>
      </div>
    </a>  
  );

}

export default talkList;