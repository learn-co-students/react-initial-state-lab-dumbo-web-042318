import React from 'react'

class ImageSlider extends React.Component {
  constructor() {
    super();

      this.state = {
        currentSlideIndex: 0
      }
  }

  render() {
    const CURRENT_SLIDE = this.state.currentSlideIndex

    return (
      <p>I am on slide {CURRENT_SLIDE}</p>
    )
  }
}

export default ImageSlider
