import React from 'react'
import User from '../MainPage/User.jsx'
import Palette from './Palette.jsx'

export default function Profile () {
  return (
    <div className="container profile">
      <User src="https://i.ytimg.com/vi/VNNYId48SYg/hqdefault.jpg" alt="Aladeen" name="aladeen4431" />
      <Palette />
    </div>
  )
}
