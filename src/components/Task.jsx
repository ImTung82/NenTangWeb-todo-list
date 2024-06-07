import React, { useState, useEffect } from 'react';
import Button from './Button';

const Task = ({ todoItem, handleMarkAsDone, handleSave, handleDelete, isEditing, setEditingTask }) => {
    const [editingValue, setEditingValue] = useState(todoItem.name);

    useEffect(() => {
        if (isEditing) {
            setEditingValue(todoItem.name);
        }
    }, [isEditing, todoItem.name]);

    const handleSaveClick = () => {
        handleSave(todoItem.name, editingValue);
        setEditingTask(null);
    };

    return (
        <div className='flex justify-between items-center w-full'>
            {isEditing ? (
                <input
                    type="text"
                    placeholder={todoItem.name}
                    value={editingValue}
                    onChange={(e) => setEditingValue(e.target.value)}
                    className="rounded border p-2"
                />
            ) : (
                <button
                    className={`font-bold ${todoItem.done ? 'line-through text-red-500' : ''}`}
                    onClick={() => handleMarkAsDone(todoItem.name)}
                >
                    {todoItem.name}
                </button>
            )}
            <div className="flex gap-2">
                { isEditing ? (
                    <Button text='Save' onClick={handleSaveClick} />
                ) : (
                    <Button text='Edit' onClick={() => setEditingTask(todoItem.name)} />
                )}
                <Button text='Delete' onClick={() => handleDelete(todoItem.name)} />
            </div>
        </div>
    );
};

export default Task;
