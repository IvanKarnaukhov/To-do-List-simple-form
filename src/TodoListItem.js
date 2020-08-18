import React, {useState} from 'react';


function TodoListItem(props) {

    const [isEditMode, setIsEditMode] = useState(false)
    const {todo, markAsDone, doAgain, remove, todoUpdate, index, moveUp, moveDown, length} = props


    const isTodoDone = todo.done
    const todoTitle = todo.name
    const todoId = todo._id

    //const titleStyle = isTodoDone === false ? {textDecoration: "line-through", listStyleType: "none"} : {listStyleType: "none"}
    const titleStyle = isTodoDone === true ? {textDecoration: "line-through"} : {}

    const [newTodo, setNewTodo] = useState(todoTitle)

    const inputHandler = (e) => {
        setNewTodo(e.target.value)
    }

    const saveButtonHandler = () => {
        todoUpdate(todoId, newTodo)
        setIsEditMode(false)
    }
// {isEditMode ? ( ) : ( ) }
    if (isEditMode) {

    } else {

    }

    return (
        <div>
            {isEditMode ? (
                <div>
                    <input onChange={inputHandler} value={newTodo}/>
                    <button onClick={saveButtonHandler}>Save</button>
                </div>
            ) : (
                <div>{isTodoDone ? (
                    <li style={titleStyle}>
                        {todoTitle}
                        <button onClick={() => doAgain(todoId)}>UnDone</button>
                        <button onClick={() => remove(todoId)}>X</button>
                        <button onClick={() => moveDown(index)}>Down</button>
                        <button onClick={() => moveDown(index)} disabled={index === 2}>Down</button>
                        {/*str[str.length - 1]*/}
                    </li>
                ) : (
                    <li style={titleStyle}>
                        {todoTitle}
                        <button onClick={() => markAsDone(todoId, todo.done)}>Done</button>
                        <button onClick={() => remove(todoId)}>x</button>
                        <button onClick={() => setIsEditMode(true)}>Edit</button>
                        <button onClick={() => moveDown(index)} disabled={index === length -1 }>Down</button>
                        <button onClick={() => moveUp(index)} disabled={index === 0}>Up</button>
                        {/*<button onClick={() => setIsEditMode(true)}>Edit</button>*/}

                    </li>
                )} </div>
            )}


        </div>
    );
}

export default TodoListItem;
