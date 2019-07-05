import React from 'react'

export default ({ sendHandler, textHandler, message }) => {
  return (
    <div className="text">
      <input
        type="text"
        value={message}
        placeholder="Введите ваше сообщение"
        onChange={textHandler}
        onKeyDown={sendHandler} 
      />
      <input 
        type="button" 
        value="SEND" 
        onClick={sendHandler}
      />
    </div>
  )
}