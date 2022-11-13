import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../contexts/AppContext'
import { TodoList } from '../../components/TodoList'

export function Todo() {
    const [todoList, setTodoList] = useState([]);
    const [fname, setFname] = useState('Alauddin')
    const [lname, setLname] = useState('')
    const [result, setResult] = useState('Fail')

    const { counter, setCounter } = useContext(AppContext)

    // Mount phase
    useEffect(() => {
        console.log('Todo: component did mount')
    }, [])

    // Update phase (Dependencies update)
    useEffect(() => {
        // console.log('Todo: component did update', fname, lname)
        if (fname === 'Alauddin' && lname === 'Ansari') {
            setResult('Pass')
        } else {
            setResult('Fail')
        }
    }, [fname, lname])

    // Update phase (Every update) - should avoid using this
    // useEffect(() => {
    //     console.log('Todo: component did update on every change')
    // })

    // Unmount phase -> check TodoList.js

    const onCreateTodo = () => {
        const msg = prompt("Tell your next todo");

        if (msg) {
            setTodoList([...todoList, { label: msg, completed: false }]);
        } else {
            alert("You have not entered any todo");
        }
    };

    const onComplete = (event) => {
        const checked = event.target.checked;
        const index = Number(event.target.value);

        console.log("index", index);
        console.log("checked: ", checked);
        console.log("Pre Todo: ", todoList);

        // const newTodoList = todoList.map((todo, i) => {
        //     if (i === index) {
        //         return {
        //             label: todo.label,
        //             completed: checked,
        //         };
        //     }
        //     return todo;
        // });

        const newTodoList = todoList.filter((todo, i) => {
            if (i === index) {
                return false
            }
            return true
        })

        console.log("updated", newTodoList);

        setTodoList(newTodoList);
    };

    const onFnameChange = (event) => {
        setFname(event.target.value)
    }

    const onLnameChange = (event) => {
        setLname(event.target.value)
    }

    const onIncrease = () => {
        const newNumber = counter + 1
        setCounter(newNumber)
    }

    return (
        <div id="todo">
            <h1>Todo</h1>
            <br /><br />
            <button onClick={onIncrease}>Increase</button>
            <br /><br />

            <label>First Name <input type="text" value={fname} onChange={onFnameChange} /></label>
            <label>Last Name <input type="text" value={lname} onChange={onLnameChange} /></label>
            <br /><br />
            <div>Your name:{`${fname} ${lname}`}</div>
            <br /><br />
            <div>Result:{`${result}`}</div>
            <br /><br />

            <button onClick={onCreateTodo}>Create TODO</button>
            <br />

            <ul>
                {todoList.map((todo, index) => {
                    return (
                        <TodoList
                            key={todo.label}
                            todo={todo}
                            index={index}
                            onComplete={onComplete}
                        />
                    )
                })}
            </ul>
        </div>
    )
}