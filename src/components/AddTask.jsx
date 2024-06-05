import React, { useEffect } from 'react'
import Button from './Button'
import TasksList from './TasksList'
import { useState } from 'react'

function AddTask() {
    const [task, setTask] = useState('')
    const key = 'todo';

    const handleSubmit = (e) => {
        e.preventDefault();
        setTask('')
        console.log(task);
        const getTodo = JSON.parse(localStorage.getItem(key)) || []
        getTodo.push(task)
        localStorage.setItem(key, JSON.stringify(getTodo))
    }

    return (
        <div className='flex flex-col gap-2 justify-center'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='add new task...' className="rounded border p-2" value={task} onChange={(e) => setTask(e.target.value)} />
                <Button text='Add' />
            </form>
            <TasksList />
        </div>
    )
}

export default AddTask