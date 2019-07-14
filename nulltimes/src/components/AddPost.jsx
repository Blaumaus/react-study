import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/postActions'

class AddPost extends Component {
  state = {
    title: '',
    body: ''
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.addPost(this.state)
    alert('Success')
    this.props.history.push('/')
  }

  changeHandler = (d, e) => {
    if (e === 'title') {
      this.setState({
        title: d.target.value
      })
    } else if (e === 'text') {
      this.setState({
        body: d.target.value
      })
    }
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitHandler}>
          <h3 className="center">Add new post</h3>
          <div className="input-field">
            <input type="text" placeholder="Post title" value={this.state.title} onChange={(d) => { this.changeHandler(d, 'title') }} />
          </div>
          <div className="input-field">
            <textarea placeholder="Post text" value={this.state.data  } onChange={(d) => { this.changeHandler(d, 'text') }} className="materialize-textarea" />
          </div>
          <div className="center-align">
            <input type="submit" className="btn" value="Create post" />
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: data => {
      dispatch(addPost(data))
    }
  }
}

export default connect('', mapDispatchToProps)(AddPost)