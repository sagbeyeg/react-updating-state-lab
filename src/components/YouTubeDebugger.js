import React from 'react'

export default class YouTubeDebugger extends React.Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  bitrateClickHandler = (e) => {
    this.setState({
      settings: {...this.state.settings,
      bitrate: 12}
    }, () => console.log(this.state.settings.bitrate))
  }

  resolutionClickHandler = (e) => {
    this.setState({
      settings: {...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    }, () => console.log(this.state.settings.video.resolution))
  }
  
  
  render() {
    return (
      <div>
      <button onClick={this.bitrateClickHandler} className="bitrate">Bitrate</button>
      <button onClick={this.resolutionClickHandler} className="resolution">Resolution</button>
      </div>
    )
  }
}