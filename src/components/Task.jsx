import React from 'react'
import Button from './Button'

function Task(props) {
  const handleDeleteClick = () => {
    // Gọi callback function để xử lý việc xóa task
    if (props.onDelete) {
      props.onDelete(props.taskName);
    }
  };

  return (
    <div className='flex gap-2 justify-center items-center py-2'>
        <p>{props.taskName}</p>
        <Button text='Edit' />
        <Button text='Delete' onClick={handleDeleteClick} />
    </div>
  )
}

export default Task;
