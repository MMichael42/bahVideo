import React from 'react';
import './showsList.css';

const showList = (props) => {

  const selectedStateClass = props.selectedShow === props.showName 
    ? "buttonShow buttonShowSelected"
    : "buttonShow"; 

  return (
      <div className = "showListItemWrapper">
        <button className = {selectedStateClass} onClick={props.click}>{props.showName}</button>
      </div>
  );
}

export default showList;