import React from 'react'
import Button from './Button'

function Task(props) {
  const handleDeleteClick = () => {
    // Gọi callback function để xử lý việc xóa task
    props.onDelete(props.taskName);
  };

  const handleMarkAsDone = () => {
    // Gọi callback function để xử lý việc sửa trạng thái hoàn thành task
    props.onDone(props.taskName);
  }

  const handleEdit = () => {
    props.onEdit(props.taskName);
  }

  return (
     <div className='flex items-center justify-between'>
        <button className='font-bold' onClick={handleMarkAsDone}>{props.taskName}</button>
        {/* <p className='font-bold'>{props.taskName}</p> */}
        <div className='flex gap-2'>
            <Button text='Edit' onClick={handleEdit} />
            {/* Bao gồm sự kiện onClick tương ứng với props.onClick ở Button.jsx */}
            {/* Sự kiện gọi tới hàm handleDeleteClick */}
            <Button text='Delete' onClick={handleDeleteClick} />
      </div>
    </div>
  )
}

export default Task;
