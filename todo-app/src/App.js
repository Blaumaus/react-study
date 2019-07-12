import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Buy some milk'},
      {id: 2, content: 'Kick dude from clan'}
    ]
  }

  addTodo = e => {
    e.id = Math.random()
    this.setState({
      todos: [...this.state.todos, e]
    })
  }

  deleteTodo = id => {
    const todos = this.state.todos.filter(el => {
      return el.id !== id
    })
    this.setState({ todos })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo add={this.addTodo} />
      </div>
    )
  }
}

export default App