import React from 'react'

export default class DigitalClicker extends React.Component {
  state = {
    timesClicked: 0
  }

  handleClick = (e) => {
    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    }, () => console.log(this.state.timesClicked))
  }
  
  render() {
    return (
    <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}