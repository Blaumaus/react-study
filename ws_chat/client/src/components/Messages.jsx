import React from 'react'

export default ({ data }) => {
  return (
    <div className="messages">
      {data.map(el => {
        return (
          <div key={Math.floor(Math.random() * 1000000)} className="message">
            <p><span>&gt;</span>{el}</p>
          </div>
        )
      })}
    </div>
  )
}