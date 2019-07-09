import React, { Component } from 'react'

export default class Timer extends Component {
  state = {
    end: false,
    timerOn: false,
    hh: this.props.data.hh,
    mm: this.props.data.mm,
    ss: this.props.data.ss
  }

  start = () => {
    this.setState({ 
      timerOn: true
    })
    this.timer = setInterval(() => {
      if (parseInt(this.state.ss) === 0) {
        if (parseInt(this.state.mm) === 0) {
          if (parseInt(this.state.hh) === 0) {
            this.setState({ end: true })
            this.stop()
          } else this.setState({ hh: this.state.hh - 1, mm: 59, ss: 59 })
        } else this.setState({ mm: this.state.mm - 1, ss: 59 })
      } else this.setState({ ss: this.state.ss - 1 })
    }, 1000)
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
    let ss = ('0' + this.state.ss).slice(-2)
    let mm = ('0' + this.state.mm).slice(-2)
    let hh = ('0' + this.state.hh).slice(-2)
    return (
      <div className={this.state.end ? 'timer end' : 'timer'}>
        <p className={this.state.end ? 'end' : ''}>{this.props.data.name === '' ? 'Название' : this.props.data.name}</p>
        <div className="display">{hh} : {mm} : {ss}</div>
        <span onClick={this.spanHandler} className="button">
          {this.state.timerOn ? 'СТОП' : 'СТАРТ'}
        </span>
      </div>
    )
  }
}