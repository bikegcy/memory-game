import React, { Component } from 'react';
import './style.css';

import Header from "./Header";
import GameGrid from "./GameGrid";
import { message } from 'antd';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      diffLevel: 6,
      playerName: 'Anonymous',
      multiPlayer: false,
      reset: false,
      started: false,
      records: [],
      gameTime: ''
    };
  }

  handleLevelChange = (val) => {
    this.setState({
      diffLevel: val
    });
  };

  handleGameWin = (steps) => {
    message.success("Congratulations! You have won the game! Click 'reset' to restart.", 5);
    let record = {
      name: this.state.playerName,
      time: this.state.gameTime,
      steps: steps
    };
    // Each time when finish the game update the history by getting the best 3 results
    if (steps) {
      this.setState({
        started: false,
        records: [...this.state.records, record]
      });
    }
  };

  updatePlayerName = (name) => {
    this.setState({
      playerName: name
    })

  };

  handleGameTime = (time) => {
    this.setState({gameTime: time})
  };

  handleReset = () => {
    this.setState({reset: !this.state.reset})
  };

  handleStart = () => {
    this.setState({started: !this.state.started})
  };

  render() {
    //console.log(this.state.diffLevel);
    return (
      <div className="App">
        <Header
          key={this.state.diffLevel * 2}
          diffLevel={this.state.diffLevel}
          started={this.state.started}
          handleLevelChange = {this.handleLevelChange}
          handleReset={this.handleReset}
          handleStart={this.handleStart}
          handleGameTime={this.handleGameTime}
          handleGameWin={this.handleGameWin}
          records={this.state.records}
        />
        <GameGrid
          handleStart={this.handleStart}
          key={this.state.reset + this.state.diffLevel}
          diffLevel = {this.state.diffLevel}
          handleGameWin={this.handleGameWin}
          getPlayerName={this.updatePlayerName}
        />
      </div>
    );
  }
}

export default App;
