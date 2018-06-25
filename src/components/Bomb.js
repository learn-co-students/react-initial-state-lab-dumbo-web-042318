import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render() {
    const SECONDS_LEFT = this.state.secondsLeft;
    return (
      <div>
        {SECONDS_LEFT ? SECONDS_LEFT + " seconds left before I go boom!" : "Boom!"}
      </div>
    )
  }
}

export default Bomb;
