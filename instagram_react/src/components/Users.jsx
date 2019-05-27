import React, { Component } from 'react'
import User from './User.jsx'
import InstaService from '../services/instaservice'

export default class Users extends Component {
  InstaService = new InstaService()

  state = {
    users: [],
    error: false
  }

  componentDidMount() {
    this.updatePosts()
  }

  updatePosts() {
    this.InstaService.getAllUsers()
      .then(this.onUsersLoaded)
      .catch(this.onError)
  }

  onUsersLoaded = users => {
    this.setState({ users })
  }

  onError = e => {
    this.setState({ error: true })
  }

  renderItems(arr) {
    return arr.map(item => {
      const { name, photo, altname, id } = item
      return (
        <User key={id} src={photo} alt={altname} name={name} min />
      )
    })
  }

  render() {
    const { error, users } = this.state

    if (error) {
      return (
        <div className="right">
          <User src="https://i.ytimg.com/vi/VNNYId48SYg/hqdefault.jpg" alt="Aladeen" name="aladeen4431" />
        </div>
      )
    }

    const items = this.renderItems(users)

    return (
      <div className="right">
        <User src="https://i.ytimg.com/vi/VNNYId48SYg/hqdefault.jpg" alt="Aladeen" name="aladeen4431" />
        <div className="users__block">
          {items}
        </div>
      </div>
    )
  }
}