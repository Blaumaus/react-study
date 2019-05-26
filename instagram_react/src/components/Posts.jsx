import React, { Component } from 'react'
import User from './User.jsx'
import InstaService from '../services/instaservice'
import ErrorMessage from './ErrorMessage.jsx'

export default class Posts extends Component {
  InstaService = new InstaService()

  state = {
    posts: [],
    error: false
  }

  componentDidMount() {
    this.updatePosts()
  }

  updatePosts() {
    this.InstaService.getAllPosts()
      .then(this.onPostsLoaded)
      .catch(this.onError)
  }

  onPostsLoaded = posts => {
    this.setState({ posts })
  }

  onError = e => {
    this.setState({ error: true })
  }

  renderItems(arr) {
    return arr.map(item => {
      const { name, alt, src, photo, altname, descr, id } = item

      return (
        <div key={id} className="post">
          <User src={photo} alt={altname} name={name} min />
          <img src={src} alt={alt} />
          <div className="post__name">{name}</div>
          <div className="post__descr">{descr}</div>
        </div>
      )
    })
  }

  render() {
    const { error, posts } = this.state
    if (error) return <ErrorMessage />

    const items = this.renderItems(posts)
    
    return (
      <div className="left">
        {items}
      </div>
    )
  }
}