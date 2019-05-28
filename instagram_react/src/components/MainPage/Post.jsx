import React, { Component } from 'react'
import User from './User.jsx'

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User src="https://i.ytimg.com/vi/VNNYId48SYg/hqdefault.jpg" alt="User logo" name="aladeen4431" min />
        <img src={this.props.src} alt={this.props.alt} />
        <div className="post__name">
          Very attractive post name
        </div>
        <div className="post__descr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Totam omnis recusandae, ratione fugiat mollitia dolorum numquam aspernatur porro.
          Magni ut vero architecto numquam ex voluptas pariatur unde voluptatum minima facere.
        </div>
      </div>
    )
  }
}