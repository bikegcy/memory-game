import React, {Component} from 'react';

import './style.css';
import SettingPanel from './SettingPanel';
import StartPanel from './StartPanel';
import TrackPanel from './TrackPanel';
import { Row, Col } from 'antd';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      endTimer: false
    });
  }

  handleEndTimer = () => {
    this.setState({
      endTimer: !this.state.endTimer
    });
  };

  render() {
    return (
      <div className="Header">

        <Row type="flex" className="Row">
          <Col span={6} className="SettingPanel">
            <SettingPanel
              handleLevelChange = {this.props.handleLevelChange}
              handleEndTimer={this.handleEndTimer}
            />
          </Col>
          <Col span={12} className="StartPanel">
            <StartPanel
              key={this.props.diffLevel}
              started={this.props.started}
              endTimer={this.state.endTimer}
              handleStart={this.props.handleStart}
              handleEndTimer={this.handleEndTimer}
              handleReset={this.props.handleReset}
              handleGameTime={this.props.handleGameTime}
            />
          </Col>
          <Col span={6} className="TrackPanel">
            <TrackPanel
              handleGameWin={this.handleGameWin}
              records={this.props.records}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
export default Header;

