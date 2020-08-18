import React, {useEffect, useState} from 'react';
import TodoCreateForm from "./TodoCreateForm";
import TodoList from "./TodoList";
import axios from 'axios';

// const initialList = [
//     {id: 1, title: "first Todo", done: true},
//     {id: 2, title: "second Todo", done: true},
//     {id: 3, title: "third Todo", done: true},

// ]


function App() {

    const [list, setList] = useState([]) //создали массив обектов


    const markAsDone = async (todoId, done) => {
        await axios.put(`http://localhost:5000/todo/${todoId}`, {done: !done})
            .then(function (response) {
                    //     const newList = [...list].map(el => {
                    //         if (el._id === todoId) return {...el, done: true}
                    //         return el
                    //     })
                    //     setList(newList)
                }
            )
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        await axios.get('http://localhost:5000/todo')
            .then(function (response) {
                    const listFromServer = response.data
                    console.log(listFromServer)
                    setList(listFromServer)
                }
            )
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }


    const doAgain = (todoId) => {
        const newList = [...list].map(el => {
            if (el._id === todoId) return {...el, done: false}
            return el
        })
        setList(newList)
    }

    const remove = async (todoId) => {

        await axios.delete(`http://localhost:5000/todo/${todoId}`)
            .then(function (response) {
                    // const newList = [...list].filter(el => el._id !== todoId)
                    // setList(newList)
                }
            )
            .catch(function (error) {
                // handle error
                console.log(error);
            })


        await axios.get('http://localhost:5000/todo')
            .then(function (response) {
                    const listFromServer = response.data
                    console.log(listFromServer)
                    setList(listFromServer)
                }
            )
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        // const newList = [...list].filter(el => el._id !== todoId)
        // setList(newList)
    };


    const todoUpdate = async (todoId, newTodo) => {
        const newList = [...list].map(el => {
            if (el._id === todoId) return {...el, title: newTodo}
            return el
        })
        setList(newList)
    }


    const create = async (title) => {

        await axios.post('http://localhost:5000/todo', {name: title})
            .then(function (response) {

                }
            )
            .catch(function (error) {
                // handle error
                console.log(error);
            })


        await axios.get('http://localhost:5000/todo')
            .then(function (response) {
                    const listFromServer = response.data
                    console.log(listFromServer)
                    setList(listFromServer)
                }
            )
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        await axios.get('http://localhost:5000/todo') //`http://localhost:5000/todo/${taskId}`
            .then(function (response) {
                    const listFromServer = response.data
                    console.log(listFromServer)
                    setList(listFromServer)
                }
            )
            .catch(function (error) {
                // handle error
                console.log(error);
            })


        // const newItem = {
        //     _id: Math.random() * 10,
        //     title: title,
        //     done: true,
        //}


        // const undatedList = [...list, newItem];
        // setList(undatedList)
    };


    const moveUp = (i) => {
        if (i !== 0) {
            const newList = [...list]
            newList.splice(i - 1, 0, newList.splice(i, 1)[0])
            setList(newList)
        }
    }

    const moveDown = (i) => {
        const newList = [...list]
        newList.splice(i + 1, 0, newList.splice(i, 1)[0])
        setList(newList)
    }

    useEffect(() => {
        axios.get('http://localhost:5000/todo')
            .then(function (response) {
                    const listFromServer = response.data
                    console.log(listFromServer)
                    setList(listFromServer)
                }
            )
            .catch(function (error) {
                // handle error
                console.log(error);
            })


    }, [])

    return (
        <div>

            <TodoCreateForm create={create}/>
            <TodoList
                markAsDone={markAsDone}
                doAgain={doAgain}
                list={list}
                remove={remove}
                todoUpdate={todoUpdate}
                moveUp={moveUp}
                moveDown={moveDown}
            />

        </div>
    );
}

export default App;
