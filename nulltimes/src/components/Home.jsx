import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    const { posts } = this.props
    const postList = posts.length 
      ? (
        posts.map(post => {
          return (
            <div key={post.id} className="post card">
              <img src={pokeball} alt="" />
              <div className="card-content">
                <Link to={'/' + post.id} className="card-title red-text">{ post.title }</Link>
                <p>{ post.body }</p>
              </div>
            </div>
          )
        })
      ) 
      : (
        <div className="center">No posts yet</div>
      )

    return (
      <div className="container">
        <h4 className="center">Home</h4>
        { postList }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)