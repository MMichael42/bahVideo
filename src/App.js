import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

import 'react-dropdown/style.css';
import './App.css';

import bahData from './data/data';

import Header from './header/header';
import VideoPlayer from './videoPlayer/videoPlayer';
import TalkListItem from './talksList/talksList';


class App extends Component {

  state = {
    currentTalkList: bahData.shows2[0].talks,
    selectedTalk: bahData.latest,
    selectedShow: bahData.latest.show
  }

  selectVideoHandler = (video) => {
    this.setState({selectedTalk: video});
  }

  showSelectHandler = (target) => {
    let showsObj = bahData.shows2.map( show => show.showTitle);
    let currentShowIndex = showsObj.indexOf(target.label); 
    this.setState({currentTalkList: bahData.shows2[currentShowIndex].talks});
    this.setState({selectedShow: target.label});
  }


  render() {

    let showListDropdownData = bahData.shows2.map( show => show.showTitle );
    // console.log(showListDropdownData); 

    let dropDownMenu = (
      <div className="dropDown">
        <Dropdown
          options={showListDropdownData} 
          onChange={this.showSelectHandler} 
          value={this.state.selectedShow} 
          placeholder="Select an option" />
      </div>
    );

    let talkList = (
      <div id = "talkList" className="talkListWrapper">
        {this.state.currentTalkList.map( (talk, index) => {
          return <TalkListItem
            key={talk.title}
            click={ () => this.selectVideoHandler(talk) }
            title={talk.title} 
            speaker={talk.speaker} 
            selectedTalk={this.state.selectedTalk.title} />
        })}
      </div>
    );

    return (
      <div className="App">
        <Header />
        <VideoPlayer currentVideo={this.state.selectedTalk} />
        {dropDownMenu}
        {talkList}
      </div>
    );
  }
}

export default App;
