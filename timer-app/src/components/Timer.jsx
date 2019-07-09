import React, { Component } from 'react'

export default class Timer extends Component {
  state = {
    timerOn: false,
    timerTime: 0,
    timerStart: 0
  }

  start = () => {
    this.setState({ 
      timerOn: true, 
      timerStart: Date.now() - this.state.timerTime
    })
    this.timer = setInterval(() => {
      this.setState({ timerTime: Date.now() - this.state.timerStart })
    }, 100)
  }

  stop = () => {
    this.setState({ timerOn: false })
    clearInterval(this.timer)
  }

  spanHandler = () => {
    if (this.state.timerOn) this.stop()
    else this.start()
  }

  render() {
    const { timerTime } = this.state
    let ss = ('0' + (Math.floor(timerTime / 1000) % 60)).slice(-2)
    let mm = ('0' + (Math.floor(timerTime / 60000) % 60)).slice(-2)
    let hh = ('0' + Math.floor(timerTime / 3600000)).slice(-2)
    return (
      <div className="timer">
        <p>{this.props.data.name === '' ? 'Название' : this.props.data.name}</p>
        <div className="display">{hh} : {mm} : {ss}</div>
        <span onClick={this.spanHandler} className="button">
          {this.state.timerOn ? 'СТОП' : 'СТАРТ'}
        </span>
      </div>
    )
  }
}