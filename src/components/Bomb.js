// Bomb Component Code Goes Here
import React from 'react';

export default class Bomb extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render(){
    // const {secondsLeft} = this.props;
    return(
      this.state.secondsLeft === 0 ? <div>Boom!</div> : <div>{this.state.secondsLeft} seconds left before I go boom!</div>
    )
  }
}
Bomb.defaultProps = {
  currentSliderIndex: 0
}
