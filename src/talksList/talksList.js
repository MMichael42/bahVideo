import React from 'react';
import './talkList.css';

const talkList = (props) => {

  const selectedStateClass = props.selectedTalk === props.title
    ? "buttonTalk buttonTalkSelected"
    : "buttonTalk";

  return (
      <div className="talkListItemWrapper">
        <button className={selectedStateClass} onClick={props.click}>{props.title} by {props.speaker}</button>
      </div>
  );

}

export default talkList;