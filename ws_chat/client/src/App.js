import React, { Component } from 'react'
import Header from './components/Header.jsx'
import Chat from './components/Chat.jsx'
import Messages from './components/Messages.jsx'
import Status from './components/Status.jsx'

export default class App extends Component {
  ws = new WebSocket('ws://localhost:3001')

  state = {
    messages: [],
    message: '',
    online: false
  }

  componentDidMount() {
    this.ws.onopen = () => this.setState({ online: true })

    this.ws.onclose = () => this.setState({ online: false })

    this.ws.onmessage = d => {
      this.setState({ messages: [d.data, ...this.state.messages] })
    }
  }

  sendHandler = ev => {
    if (ev.keyCode === 13 || ev.nativeEvent.type === 'click') { // 13 => 'Enter'
      if (this.state.message !== '') {
        this.ws.send(this.state.message)
        this.setState({ message: '' })
      }
    }
  }

  textHandler = d => {
    this.setState({ message: d.target.value })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Status online={this.state.online} />
        <Chat message={this.state.message} sendHandler={this.sendHandler} textHandler={this.textHandler} />
        <Messages data={this.state.messages} />
      </div>
    )
  }
}