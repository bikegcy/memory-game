import React, { Component } from 'react';
import '../style.css';
import { Card, Icon } from 'antd';

class SingleCard extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      flipped: false,
      matched: false,
      val: this.props.val,
      fade: null
    })
  }

  componentDidUpdate() {
    if (!this.state.matched && this.props.matchedArr.includes(this.state.val)) {
      this.setState({matched: true})
    }
    if (!this.props.afterFirstClick && !this.state.matched && this.state.flipped) {
      setTimeout(() => {
        this.setState({flipped: false});
      }, 1000);
    }
  }

  handleClick = () => {
    //console.log('click from single card');
    this.setState({flipped: !this.state.flipped});
    this.props.handleClick(this.state.val);
  };

  render() {
    const { flipped, matched } = this.state;
    const gridStyle = {width: this.props.width, textAlign: 'center'};
    const successGridStyle = {width: this.props.width, textAlign: 'center', backgroundColor: 'lightgreen'};
    if (matched) {
      return (
        <Card.Grid style={successGridStyle}>
          {this.state.val}
        </Card.Grid>);
    } else if (!flipped) {
      return (
        <Card.Grid onClick={this.handleClick} style={gridStyle}>
          <Icon type="thunderbolt" theme="twoTone" />
        </Card.Grid>);
    } else if (flipped) {
      return(
        <Card.Grid style={gridStyle}>
          {this.state.val}
        </Card.Grid>);
    }
  }
}

export default SingleCard;