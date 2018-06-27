import React, { Component } from 'react'

class Bomb extends Component {
  constructor(props){
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render(){
    if(this.state.secondsLeft === 0){
      return <p>Boom!</p>
    } else {
      return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    }
  }
}

export default Bomb
