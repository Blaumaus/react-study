import React from 'react'

export default ({ todos, deleteTodo }) => {
  return (
    <div className="todos collection">
      {todos.length 
        ? todos.map(el => {
          return (
            <div key={el.id} className="collection-item">
              <span onClick={() => { deleteTodo(el.id) }}>{ el.content }</span>
            </div>
          )
        })
        : <p className="center">You have to todos yet!</p>
      }
    </div>
  )
}