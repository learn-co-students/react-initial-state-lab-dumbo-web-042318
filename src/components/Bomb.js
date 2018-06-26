import React from 'react'

class Bomb extends React.Component {

  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }



  render() {
    let text;

    if (this.state.secondsLeft === 0) {
      text = <p1>Boom!</p1>
    } else {
      text =  <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    }

    return (
      <p>{text}</p>
    )
  }
}

export default Bomb
