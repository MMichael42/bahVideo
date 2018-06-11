import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

import 'react-dropdown/style.css';
import './App.css';

import bahData from './data/data';

import SiteHeader from './siteHeader/siteHeader';
import VideoPlayer from './videoPlayer/videoPlayer';
import TalkListItem from './talksList/talksList';

console.log('hi mom!');


// get url so we can parse possible show and talk params
let url = new URL(window.location.href);


let showCount = bahData.shows.length;
let urlShow = url.searchParams.get("show") || 0;
// if show count in url param is out of range, set to 0
if (urlShow > showCount - 1) {
  urlShow = 0;
  url.searchParams.set("show", 0);
  document.location.search = url.searchParams;
}

let talkCount = bahData.shows[urlShow].talks.length;
let urlTalk = url.searchParams.get("talk") || 0;
// if talk count in url param is out of range, set to 0
if (urlTalk > talkCount - 1) {
  urlTalk = 0;
  url.searchParams.set("talk", 0);
  document.location.search = url.searchParams;
}

class App extends Component {
  
  state = {
    currentTalkList: bahData.shows[urlShow].talks,
    selectedTalk: bahData.shows[urlShow].talks[urlTalk],
    selectedShow: bahData.shows[urlShow].showTitle
  }

  selectVideoHandler = (video, index) => {
    this.setState({selectedTalk: video});
    url.searchParams.set("talk", index);
    document.location.search = url.searchParams;
  }

  showSelectHandler = (target) => {
    let showsObj = bahData.shows.map( show => show.showTitle);
    let currentShowIndex = showsObj.indexOf(target.label); 
    this.setState({currentTalkList: bahData.shows[currentShowIndex].talks});
    this.setState({selectedShow: target.label});
    url.searchParams.set("show", currentShowIndex);
    // reset talk selection to the first talk in the list since we're changing shows
    url.searchParams.set("talk", 0);
    document.location.search = url.searchParams;
  }

  render() {
    let showListDropdownData = bahData.shows.map( show => show.showTitle );

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
            click={ () => this.selectVideoHandler(talk, index) }
            title={talk.title} 
            speaker={talk.speaker} 
            selectedTalk={this.state.selectedTalk.title}
            selectedShow={this.state.selectedShow} 
            youtubeID={talk.embedCode} />
        })}
      </div>
    );

    let sidebar = (
      <div className="sideBar">
        {dropDownMenu}
        {talkList}
      </div>
    );


    return (
      <div className="App">
        <SiteHeader />
        <VideoPlayer currentVideo={this.state.selectedTalk} />
        {sidebar}
      </div>
    );
  }
}



export default App;
