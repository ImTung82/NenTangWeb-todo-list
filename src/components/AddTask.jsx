import React, { useEffect, useState } from 'react';
import Button from './Button';

function AddTask() {
    // Tương ứng với input
    const [task, setTask] = useState('');
    // Tương ứng với list các Task
    const [todoList, setTodoList] = useState([]);
    const [editting, seEditting] = useState(false);
    // Key ở trên localStorage
    const key = 'todo';

    // Lưu trữ dữ liệu cũ của localStorage, update lại nhũng dữ liệu đó khi load lại trang
    useEffect(() => {
        const storedTodoList = JSON.parse(localStorage.getItem(key)) || [];
        setTodoList(storedTodoList);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Nếu đầu và cuối của task là trống (kiểm tra bằng cách sử dụng task.trim()) thì sẽ không thêm task mới
        if (task.trim() === '') return;
        // Tạo ra một Task mới, bao gồm 2 trường: name - tên của Task và done - trạng thái hoàn thành của Task (mặc định là false)
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
        // Kiểm tra từng item trong todoList
        // Nếu taskName (tên của Task đang bấm) trùng với item.name (tên của Task trong quá trình kiểm tra)
        // Thực hiện {...item, done: !item.done}: Tạo một đối tượng mới với thuộc tính done được thay đổi (đổi true thành false hoặc ngược lại).
        const updatedTodoList = todoList.map(item => 
            item.name === taskName ? { ...item, done: !item.done } : item
        );
        setTodoList(updatedTodoList);
        localStorage.setItem(key, JSON.stringify(updatedTodoList));
    };

    const handleEdit = (taskName) => {
        
    }

    return (
        <div className='flex flex-col'>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='add new task...'
                    className="rounded border p-2 my-2 w-96" 
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
                            <button 
                            // ${...} là cách sử dụng template literals trong JavaScript
                            // Nếu todoItem.done (kiểm tra done từ localStorage) = true, thêm thuộc tính CSS line-through và ngược lại
                                className={`font-bold ${todoItem.done ? 'line-through' : ''}`} 
                                onClick={() => handleMarkAsDone(todoItem.name)}
                            >
                                {todoItem.name}
                            </button>
                            <div className='flex gap-2'>
                                <Button text='Edit' onClick={() => handleEdit(todoItem.name)} />
                                {/* Button này có sự kiện onClick -> gọi hàm handleDelete với tham số truyền vào là todoItem.name - tên của Task tương ứng với nút Delete vừa bấm */}
                                <Button text='Delete' onClick={() => handleDelete(todoItem.name)} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AddTask;
