// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    const secondsLeft = this.state.secondsLeft;
    let phrase;

    if (secondsLeft === 0) {
      phrase = 'Boom!'
    } else {
      phrase = `${secondsLeft} seconds left before I go boom!`
    }

    return (
      <div>
        {phrase}
      </div>
    );
  }
}

export default Bomb;
