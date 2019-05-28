import React from 'react'
import spinnerImage from '../../images/spinner.gif'

export default function Spinner() {
  return (
    <div className="spinner">
      <img src={spinnerImage} alt="Loading..." />
    </div>
  )
}