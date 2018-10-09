import React, { Component } from 'react';

import '../style.css';
import { Button } from 'antd';

class StartPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      secondsElapsed: 0
    };
  }

  resetTimer = () => {
    const curTime=this.getMinutes() + ':' + this.getSeconds();
    this.props.handleGameTime(curTime);
    clearInterval(this.state.timer);
    this.setState({
      timer: undefined,
      secondsElapsed: 0
    });
    // set time out to let the unfinished functions to be finished to avoid memory leak
    setTimeout(() => {
      this.props.handleReset();
    }, 500);

  };

  tick = () => {
    // Use tick to sync the time
    this.setState({
      secondsElapsed: this.state.secondsElapsed + 1
    });
    const curTime=this.getMinutes() + ':' + this.getSeconds();
    this.props.handleGameTime(curTime);
  };

  getMinutes = () => {
    return Math.floor(this.state.secondsElapsed / 60);
  };

  getSeconds = () => {
    return ('0' + this.state.secondsElapsed % 60).slice(-2);
  };

  handleStart = () => {
    this.setState({
      timer: setInterval(this.tick, 1000)
    })
  };

  componentDidUpdate() {
    if (this.props.started && !this.state.timer) {
      this.handleStart();
      this.props.handleStart();
    }
    if (this.props.endTimer && this.state.timer) {
      //const curTime=this.getMinutes() + ':' + this.getSeconds();
      this.props.handleEndTimer();
      this.resetTimer();
    }
  }

  render() {

    return (
      <div className="StartPanel">
        <h2>
          {this.getMinutes()} : {this.getSeconds()}
        </h2>
        <Button type="primary" onClick={this.handleStart}>
          start
        </Button>
        <Button type="danger" onClick={this.resetTimer}>
          reset
        </Button>
      </div>
    );
  }
}

export default StartPanel;

