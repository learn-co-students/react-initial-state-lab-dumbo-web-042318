// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount,
    }
  }

  render() {
    return (this.state.secondsLeft ?
      <p>{this.state.secondsLeft} seconds left before I go boom!</p> :
      <p>Boom!</p>);
  }
}

export default Bomb;
