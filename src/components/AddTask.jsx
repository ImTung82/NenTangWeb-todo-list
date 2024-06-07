import React, { useEffect, useState } from 'react';
import Button from './Button';
import Task from './Task';

function AddTask() {
    const [task, setTask] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const key = 'todo';

    useEffect(() => {
        const storedTodoList = JSON.parse(localStorage.getItem(key)) || [];
        setTodoList(storedTodoList);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === '') return;
        const updatedTodoList = [...todoList, { name: task, done: false }];
        setTodoList(updatedTodoList);
        localStorage.setItem(key, JSON.stringify(updatedTodoList));
        setTask('');
    };

    const handleDelete = (taskName) => {
        const updatedTodoList = todoList.filter(item => item.name !== taskName);
        setTodoList(updatedTodoList);
        localStorage.setItem(key, JSON.stringify(updatedTodoList));
    };

    const handleMarkAsDone = (taskName) => {
        const updatedTodoList = todoList.map(item =>
            item.name === taskName ? { ...item, done: !item.done } : item
        );
        setTodoList(updatedTodoList);
        localStorage.setItem(key, JSON.stringify(updatedTodoList));
    };

    const handleSave = (taskName, newValue) => {
        if (newValue.trim() === '') return;
        const updatedTodoList = todoList.map(item =>
            item.name === taskName ? { ...item, name: newValue } : item
        );
        setTodoList(updatedTodoList);
        localStorage.setItem(key, JSON.stringify(updatedTodoList));
        setEditingTask(null);
    };

    return (
        <div className='flex flex-col'>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='add new task...'
                    className="rounded border p-2 my-2 w-[1000px]" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} 
                />
                <div className="mb-5">
                    <Button text='Add' />
                </div>
            </form>
            <div className=''>
                <ul>
                    {todoList.map((todoItem) => (
                        <li key={todoItem.name} className='flex items-center justify-between'>
                            <Task
                                todoItem={todoItem}
                                handleMarkAsDone={handleMarkAsDone}
                                handleEdit={() => setEditingTask(todoItem.name)}
                                handleSave={handleSave}
                                handleDelete={handleDelete}
                                isEditing={editingTask === todoItem.name}
                                setEditingTask={setEditingTask}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AddTask;
