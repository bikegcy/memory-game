import React, { Component } from 'react';
import { Card } from 'antd';
import SingleCard from './SingleCard';

class Cards extends Component {

  constructor(props) {
    super(props);
    let a = [], limit = Math.pow(this.props.row, 2) / 2, width = 100 / this.props.row + "%";
    for (let i = 0;i < limit; ++i) a[i]=i;
    let contents = this.shuffle([...a, ...a]);
    //contents=[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17];

    this.state = ({
      contents: contents,
      width: width,
      pre: -1,
      cur: -2,
      afterFirstClick: false,
      matchedArr: []
    })
  }

  handleClick = (val) => {
    this.props.handleClick(this.state.matchedArr);
    //console.log('cards click');
    if (!this.state.afterFirstClick) {
      this.setState({
        pre: val,
        afterFirstClick: !this.state.afterFirstClick
      });
    } else {
      this.setState({
        afterFirstClick: !this.state.afterFirstClick,
        cur: val
      });
    }
  };

  componentDidUpdate() {
    if (!this.state.afterFirstClick) {
      if (this.state.pre === this.state.cur) {
        //console.log('cur length' + this.state.matchedArr.length);
        if (this.state.matchedArr.length * 2 === this.state.contents.length - 2) {
          this.props.handleGameWin();
        }
        this.setState({
          pre: -1,
          matchedArr: [...this.state.matchedArr, this.state.cur]
        })
      }
    }
  }

  shuffle = (array) => {
    let tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  };

  render() {

    return (
      <div>
        <Card>
          {this.state.contents.map(((val, index) => {
            return (
              <SingleCard
                key={index}
                width={this.state.width}
                val={val}
                handleClick={this.handleClick}
                matchedArr={this.state.matchedArr}
                afterFirstClick={this.state.afterFirstClick}
              />);
          }))}
        </Card>
      </div>
    );
  }
}

export default Cards;