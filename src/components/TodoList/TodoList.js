import React, { useEffect } from 'react'
import { Checkbox } from '../Checkbox'
import './TodoList.css'

export function TodoList({ todo, index, onComplete }) {
    // Mount phase
    useEffect(() => {
        console.log('TodoList: mount', todo.label)

        const clickHandler = () => console.log('you clicked')

        document.addEventListener('click', clickHandler)

        // Unmount phase (component will unmount) (only sync execution is allowed)
        return () => {
            // don't call any API (async) here
            console.log('TodoList: Unmount', todo.label)

            document.removeEventListener('click', clickHandler) // use case
        }
    }, [todo.label])

    return (
        <li className={`listItem ${todo.label}`}>
            <label className={todo.completed ? "completed" : ""}>
                <Checkbox value={index} onClick={onComplete} />
                {todo.label}
            </label>
        </li>
    )
}
