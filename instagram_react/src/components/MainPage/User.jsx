import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <a href="#" className={this.props.min ? "user min" : "user"}>
        <img src={this.props.src} alt={this.props.alt} />
        <div>{this.props.name}</div>
      </a>
    )
  }
}