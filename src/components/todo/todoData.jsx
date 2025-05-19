const TodoData = (props) => {
    const { todos, deleteTodo } = props; // destructuring
    //props là 1 object
    const handleClick = (id) => {
        deleteTodo(id);
    }
    return (
        <div className='todo-data'>
            {todos.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button style={{ cursor: "pointer" }} onClick={() => handleClick(item.id)} > Delete</button>
                    </div>
                )
            })}
        </div >)
}
export default TodoData