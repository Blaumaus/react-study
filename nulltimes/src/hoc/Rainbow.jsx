import React from 'react'

const Rainbow = WrappedComp => {
  const colors = ['red', 'green', 'yellow', 'blue', 'orange']
  const randColor = colors[Math.floor(Math.random() * 4)]
  const className =  randColor + '-text'

  return (props) => {
    return (
      <div className={className}>
        <WrappedComp {...props} />
      </div>
    )
  }
}

export default Rainbow