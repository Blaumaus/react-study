import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const NavBar = props => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">NullTimes</Link>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/add">Add post</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(NavBar)