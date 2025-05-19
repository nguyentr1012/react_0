import React, { useState } from 'react'


const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("text input");
    //destructuring array
    console.log(">> check props", props)
    const { addNewTodo } = props; // destructuring

    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput(""); // reset input
        console.log(">> check valueInput", valueInput)
    }

    const handleOnChange = (name) => {
        console.log(">> check event", name)
        setValueInput(name);
    }
    // addNewTodo("liv");
    return (
        <div>
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput}
            />
            <button style={{ cursor: "pointer" }} onClick={handleClick}>Add</button>
            <div className="div">
                my text input is {valueInput}
            </div>
        </div >)
}
export default TodoNew