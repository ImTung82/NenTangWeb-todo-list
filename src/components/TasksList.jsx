import React from 'react';
import Task from './Task';

function TasksList({ todoList, onDelete, onDone, onEdit}) {
    return (
        <div className=''>
            <ul>
                {todoList.map((todoItem) => (
                    <li key={todoItem}>
                        <Task taskName={todoItem} onDelete={() => onDelete(todoItem)} onDone={() => onDone(todoItem)} onEdit={() => onEdit(todoItem)} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TasksList;
