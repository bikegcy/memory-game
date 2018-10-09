import React, { Component } from 'react';

import '../style.css';

class TrackPanel extends Component {

  render() {
    let time, steps;
    let nameTime, nameSteps;
    if (this.props.records.length !== 0) {
      let record = this.props.records.sort((record1, record2) => {
        return 60 * parseInt(record1.time.split(':')[0], 10) + parseInt(record1.time.split(':')[1], 10) -
          60 * parseInt(record2.time.split(':')[0], 10) + parseInt(record2.time.split(':')[1], 10)
      });
      time = record[0].time;
      nameTime = record[0].name;
      steps = this.props.records.sort((record1, record2) => {
        return record1.steps - record2.steps;
      })[0].steps;
      nameSteps = this.props.records.sort((record1, record2) => {
        return record1.steps - record2.steps;
      })[0].name;
    } else {
      time = '0:00';
      steps = 0;
    }
    //console.log(this.props.records);
    return (
      <div className="TrackPanel">
        <h3 className="TrackHeader">Best Score</h3>
        <p className="TrackTime">Fastest: {time} ({nameTime})</p>
        <p className="TrackSteps">Least Moves: {steps} ({nameSteps})</p>
      </div>
    );
  }
}

export default TrackPanel;