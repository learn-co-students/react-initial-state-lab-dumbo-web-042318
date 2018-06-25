// BOMB


import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  render() {
    const check = this.state.secondsLeft === 0 ? "Boom!" : this.state.secondsLeft + " seconds left before I go boom!"
    return (
      <div> 
        {check}
      </div>
    )
  }
}

export default Bomb
