const TodoData = (props) => {
    const { todos } = props; // destructuring
    //props là 1 object
    console.log(">> check props", todos)
    return (
        <div className='todo-data'>
            {todos.map((item, index) => {
                console.log(">> check map", item, index)
                return (
                    <div className="todo-item">
                        <div>{item.name}</div>
                        <button> Delete</button>
                    </div>
                )
            })}
        </div>)
}
export default TodoData