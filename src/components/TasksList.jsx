import React, { useEffect, useState } from 'react';
import Task from './Task';

function TasksList() {
  const key = 'todo';
  const todoList = JSON.parse(localStorage.getItem(key)) || [];

  const handleDeleteTask = (taskName) => {
    const updatedTodoList = todoList.filter(item => item !== taskName);
    localStorage.setItem(key, JSON.stringify(updatedTodoList));
  };

  return (
    <div>
        <ul>
          {todoList.map((todoItem) => (
            <li key={todoItem}><Task taskName={todoItem} onDelete={handleDeleteTask} /></li>
          ))}
        </ul>
    </div>
  );
}

export default TasksList;
