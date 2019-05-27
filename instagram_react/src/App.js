import React from 'react'
import Header from './components/Header.jsx'
import Feed from './components/Feed.jsx'
import Profile from './components/Profile.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" component={Feed} exact />
        <Route path="/profile" component={Profile} exact />
      </div>
    </Router>
  )
}

export default App