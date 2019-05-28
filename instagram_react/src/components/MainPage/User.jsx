import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <a href={`https://example.com/${this.props.name}`} className={this.props.min ? "user min" : "user"} target="_blank" rel="noopener noreferrer">
        <img src={this.props.src} alt={this.props.alt} />
        <div>{this.props.name}</div>
      </a>
    )
  }
}