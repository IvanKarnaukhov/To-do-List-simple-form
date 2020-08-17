import React from 'react';
import TodoListItem from "./TodoListItem";


function TodoList(props) {

    const {markAsDone, doAgain, list, remove, todoUpdate, moveUp, moveDown} = props
    const length = list.length

    return (
        <div>
            To do list


            {list.map((el, i) => <TodoListItem
                key={el._id}
                todo={el}
                index={i}
                markAsDone={markAsDone}
                doAgain={doAgain}
                remove={remove}
                todoUpdate={todoUpdate}
                moveUp={moveUp}
                moveDown={moveDown}
                length={length}
            />)}


        </div>
    );
}

export default TodoList;
