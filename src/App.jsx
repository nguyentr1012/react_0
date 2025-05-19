import './components/todo/todo.css'
import React from 'react'
import TodoNew from './components/todo/todoNew'
import TodoData from './components/todo/todoData'
import reactLogo from './assets/react.svg'
const App = () => {
  const hoidanit = 'eric wtf';
  const age = 20;
  return (
    <div className="todo-container">
      <div className="todo-title"> todo List</div>
      <TodoNew />
      <TodoData
        name={hoidanit}
        age={age}
      />
      <div className="todo-image">
        <img src={reactLogo} />
      </div>
    </div>
  )
}

export default App
