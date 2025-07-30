import React from 'react'
import { useDispatch } from 'react-redux';
import { Button } from '../button/Button';
import { removeTodo } from '../../redux/slice/todoSlice';
import { FaTrash } from 'react-icons/fa';
const Todo = ({todo}) => {
  let todoContent=todo.text;
  const dispatch=useDispatch();
  const handleDelete=()=>{
    dispatch(removeTodo(todo.id));
  }
    return (
    <>
    <div className='flex items-center justify-between w-full'>
        <div className='text-lg w-full '>
            {todoContent}
        </div>
        <div className='mb-4 ml-70 fixed'>
            <Button onClick={handleDelete} className={"fixed "} icon={<FaTrash size={20} className='text-gray-500 mr-2'/>} />
        </div>
    </div>
    </>
  )
}

export default Todo