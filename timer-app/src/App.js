import React, { Component } from 'react'
import Draggable from 'react-draggable'
import AddTimerButton from './components/AddTimerButton.jsx'
import AddTimerMenu from './components/AddTimerMenu.jsx'
import Timer from './components/Timer.jsx'
import Countdown from './components/Countdown.jsx'
import './styles/timer.css'

export default class App extends Component {
  state = {
    activeTimers: [],
    showMenu: false
  }

  menuHandler = () => this.setState({ showMenu: true })

  dataHandler = d => {
    this.setState({ showMenu: false })
    this.setState({ activeTimers: [...this.state.activeTimers, d] })
  }

  render() {
    return (
      <>
        <AddTimerButton clickHandler={this.menuHandler} />
        <AddTimerMenu show={this.state.showMenu} dataHandler={this.dataHandler} />
        <div className="timers">
          <p>ПОСТАВЬ СВОЙ ТАЙМЕР</p>
          {this.state.activeTimers.map((e, i) => {                  
            if (e.type === 'countdown') return <Draggable key={i}><span><Countdown data={e} /></span></Draggable>
            else return <Draggable key={i}><span><Timer data={e} /></span></Draggable>
          })}
        </div>
      </>
    )
  }
}