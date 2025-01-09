import { useState } from "react"

export default function ToDoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props;
    // e is the event. e.target is the element that triggered the event. 
    return (
        <div>
            <header>
                <input value={todoValue} onChange={(e) => {
                    setTodoValue(e.target.value)
                }} placeholder="Enter todo..." type="text" />
                <button onClick={() => {
                    handleAddTodos(todoValue)
                    setTodoValue('')
                }}>Add</button>
            </header>
        </div>
    )

}