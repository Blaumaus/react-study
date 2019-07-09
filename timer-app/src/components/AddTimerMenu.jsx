import React, { Component } from 'react'

export default class AddTimerMenu extends Component {
  state = {
    type: true, // false - timer, true - countdown
    name: '',
    show: false,
    hh: '00',
    mm: '00',
    ss: '00'
  }

  nameHandler = e => this.setState({ name: e.target.value })

  checkHandler = () => this.setState({ type: !this.state.type })

  clickHandler = () => this.setState({ show: true })

  changeHandler = e => {
    if (e.target.name === 'hh') {
      if (e.target.value >= 0) {
        this.setState({ hh: e.target.value })
      } else {
        alert('Поле "часы" должно быть больше нуля!')
        this.setState({ hh: '00' })
      }
    } else if (e.target.name === 'mm') {
      if (e.target.value <= 60 && e.target.value >= 0) {
        this.setState({ mm: e.target.value })
      } else {
        alert('Поле "минуты" должно быть в диапазоне [0, 60]')
        this.setState({ mm: '00' })
      }
    } else {
      if (e.target.value <= 60 && e.target.value >= 0) {
        this.setState({ ss: e.target.value })
      } else {
        alert('Поле "секунды" должно быть в диапазоне [0, 60]')
        this.setState({ ss: '00' })
      }
    }
  }

  startHandler = () => {
    const { hh, mm, ss, type, name } = this.state

    if (type) this.props.dataHandler({ type: 'countdown', name, hh, mm, ss })
    else this.props.dataHandler({ type: 'timer', name })

    this.setState({ 
      name: '', 
      show: false,
      hh: '00',
      mm: '00',
      ss: '00' 
    })
  }

  render() {
    return (
      <div className={this.props.show ? 'menu' : 'menu hidden'}>
        <span className="info">Название </span><span className="button" onClick={this.clickHandler}>Появись</span>
        <input
          type="text"
          placeholder="Введите название таймера"
          className={this.state.show ? 'show' : ''}
          value={this.state.name}
          onChange={this.nameHandler}
        />
        <p className="info">Тип таймера</p>
        <div>
          <span className="info">Timer</span>
          <label className="switch">
            <input type="checkbox" defaultChecked={this.state.type} onChange={this.checkHandler} />
            <span className="slider"></span>
          </label>
          <span className="info">Countdown</span>
        </div>
        <div className={this.state.type ? 'inputs show' : 'inputs'}>
          <input
            type="text"
            name="hh"
            max="24"
            maxLength="2"
            value={this.state.hh}
            onChange={this.changeHandler}
          /><span className="info"> : </span>
          <input
            type="text"
            name="mm"
            maxLength="2"
            value={this.state.mm}
            onChange={this.changeHandler}
          /><span className="info"> : </span>
          <input
            type="text"
            name="ss"
            value={this.state.ss}
            maxLength="2"
            onChange={this.changeHandler}
          />
        </div>
        <span className="button start" onClick={this.startHandler}>СТАРТ</span>
      </div>
    )
  }
}
