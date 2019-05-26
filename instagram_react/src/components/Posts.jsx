import React, { Component } from 'react'
import Post from './Post.jsx'

export default class Posts extends Component {
  render() {
    return (
      <div className="left">
        <Post src="http://www.cruisemapper.com/images/ships/1936-03acd118f1b.jpg" alt="Titanic image" />
        <Post src="https://i.ytimg.com/vi/ph6Y0WXGqVI/maxresdefault.jpg" alt="F16 image" />
      </div>
    )
  }
}