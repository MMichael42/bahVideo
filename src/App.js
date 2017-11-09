import React, { Component } from 'react';
import './App.css';

import bahData from './data/data';

import Header from './header/header';
import VideoPlayer from './videoPlayer/videoPlayer';
import ShowListItem from './showsList/showsList';
import TalkListItem from './talksList/talksList';


class App extends Component {

  state = {
    currentTalkList: bahData.shows2[0].talks,
    selectedTalk: bahData.latest,
    selectedShow: bahData.latest.show
  }

  showTalkListHandler = (show) => {
    this.setState({currentTalkList: show.talks});
    this.setState({selectedShow: show.showTitle});
  }

  selectVideoHandler = (video) => {
    this.setState({selectedTalk: video});
  }


  render() {

    let showList = (
      <div id = "showList" className="showListWrapper">
        {bahData.shows2.map( (show, index) => {
          return <ShowListItem 
            key={index}
            click={ () => this.showTalkListHandler(show) } 
            showName={show.showTitle}
            selectedShow={this.state.selectedShow} />
        })}
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
        {showList}
        {talkList}
      </div>
    );
  }
}

export default App;
