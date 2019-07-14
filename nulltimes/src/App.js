import React, { Component } from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
import AddPost from './components/AddPost'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/add" component={AddPost} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </Router>
    )
  }
}