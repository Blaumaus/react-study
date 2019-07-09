import React from 'react'

export default ({ clickHandler }) => {
  return (
    <div className="new_button" onClick={clickHandler}>
      <span>+</span>
    </div>
  )
}