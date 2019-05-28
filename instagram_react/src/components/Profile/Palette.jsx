import React, { Component } from 'react'
import ErrorMessage from '../Other/ErrorMessage.jsx'
import InstaService from '../../services/instaservice'
import Spinner from '../Other/Spinner.jsx'

export default class Palette extends Component {
  InstaService = new InstaService()

  state = {
    photos: [],
    error: false,
    spinner: true
  }

  componentDidMount() {
    this.updatePosts()
  }

  updatePosts() {
    this.InstaService.getAllPhotos()
      .then(this.onPhotosLoaded)
      .catch(this.onError)
  }

  onPhotosLoaded = photos => {
    this.setState({ 
      photos,
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
      const { src, alt, id } = item

      return (
        <img key={id} src={src} alt={alt} />
      )
    })
  }

  render() {
    const { error, photos, spinner } = this.state
    if (error) return <ErrorMessage />
    if (spinner) return <Spinner />

    const items = this.renderItems(photos)
    
    return (
      <div className="palette">
        {items}
      </div>
    )
  }
}

