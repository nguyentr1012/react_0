import './components/todo/todo.css'
import React from 'react'
import TodoNew from './components/todo/todoNew'
import TodoData from './components/todo/todoData'
import reactLogo from './assets/react.svg'
const App = () => {

  const [todos, setTodos] = React.useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching utube" },
  ])
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000),
      name: name
    }

    setTodos([...todos, newTodo]) // không chỉnh sửa trực tiếp vào state
  }
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  return (
    <div className="todo-container">
      <div className="todo-title"> todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        todos={todos}
      />
      <div className="todo-image">
        <img src={reactLogo} />
      </div>
    </div>
  )
}

export default App
