import React, {Component} from 'react';

import './style.css';
import { Input, Icon } from 'antd';
import Cards from './Cards';

class GameGrid extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      playerName: '',
      steps: 0
    })
  }

  handleClick = () => {
    if (this.state.steps === 0) this.props.handleStart();
    this.setState({
      steps: this.state.steps + 1
    });
  };

  handleGameWin = () => {
    this.props.handleGameWin(this.state.steps);
    console.log('win the game!');
  };

  onChangeUserName = (e) => {
    this.setState({ playerName: e.target.value });
    this.props.getPlayerName(e.target.value);
  };

  render() {
    return (
      <div className="GameGrid">
        <Input
          className ="nameInput"
          style={{ textAlign: 'center' }}
          placeholder="Enter your name"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          value={this.state.playerName}
          onChange={this.onChangeUserName}
        />
        <p className="steps">
          steps: {this.state.steps}
        </p>
        <Cards
          key={this.props.diffLevel}
          row={this.props.diffLevel}
          handleClick={this.handleClick}
          handleGameWin={this.handleGameWin}
        />
      </div>
    );
  }
}

export default GameGrid;