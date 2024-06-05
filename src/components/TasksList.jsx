import React from 'react';
import Task from './Task';

function TasksList({ todoList, onDelete, onDone}) {
    return (
        <div className=''>
            <ul>
                {todoList.map((todoItem) => (
                    <li key={todoItem}>
                        <Task taskName={todoItem} onDelete={() => onDelete(todoItem)} onDone={() => onDone(todoItem)} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TasksList;
