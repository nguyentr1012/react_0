const TodoData = (props) => {
    const { name, age } = props; // destructuring
    //props là 1 object
    return (
        <div className='todo-data'>
            <div>My name is:{name}</div>
            <div>Learning React: {age}</div>
            <div>Learning smth</div>
        </div>)
}
export default TodoData