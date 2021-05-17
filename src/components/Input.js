import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'

import './Input.css'

function Input() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodo = () => {
        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now()
        }))
    }
    return (
        <div className="input">
            <input className="text" value={input} onChange={e => setInput(e.target.value)}></input>
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

export default Input
