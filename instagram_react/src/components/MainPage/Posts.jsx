import React, { Component } from 'react'
import User from './User.jsx'
import InstaService from '../../services/instaservice'
import ErrorMessage from '../Other/ErrorMessage.jsx'
import Spinner from '../Other/Spinner.jsx'

export default class Posts extends Component {
  InstaService = new InstaService()

  state = {
    posts: [],
    error: false,
    spinner: true
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
    this.setState({ 
      posts,
      spinner: false
    })
  }

  onError = e => {
    this.setState({ 
      error: true,
      spinner: false
    })
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
    const { error, posts, spinner } = this.state
    if (error) return <ErrorMessage />
    if (spinner) return <Spinner />

    const items = this.renderItems(posts)
    
    return (
      <div className="left">
        {items}
      </div>
    )
  }
}