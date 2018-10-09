import React, {Component} from 'react';

import '../style.css';
import { Select } from 'antd';

const Option = Select.Option;

class SettingPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      level: 6
    }
  }

  handleLevelChange = (val) => {
    console.log(val);
    this.props.handleLevelChange(val);
    this.props.handleEndTimer();
  };

  render() {
    return (
      <div>
        <Select className="select" defaultValue="Select game level" onChange={this.handleLevelChange}>
          <Option value="6"> Easy </Option>
          <Option value="8"> Medium </Option>
          <Option value="10"> Hard </Option>
        </Select>
      </div>
    );
  }
}

export default SettingPanel;