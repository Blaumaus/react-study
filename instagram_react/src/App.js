import React from 'react'
import Header from './components/Other/Header.jsx'
import Feed from './components/MainPage/Feed.jsx'
import Profile from './components/Profile/Profile.jsx'
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