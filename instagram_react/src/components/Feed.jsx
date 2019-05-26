import React from 'react'
import Posts from './Posts.jsx'
import Users from './Users.jsx'

export default function Feed () {
  return (
    <div className="container feed">
      <Posts />
      <Users />
    </div>
  )
}