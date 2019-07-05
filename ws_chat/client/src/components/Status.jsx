import React from 'react'

export default ({ online }) => {
  return (
    <p className={online ? 'status online' : 'status offline'}>{online ? 'ПОДКЛЮЧЕН' : 'ОТКЛЮЧЕН'}</p>
  )
}