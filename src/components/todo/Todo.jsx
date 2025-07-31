import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button } from '../button/Button';
import { editTodo, removeTodo } from '../../redux/slice/todoSlice';
import { FaTrash,FaEdit } from 'react-icons/fa';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Input from '../input/Input';
const Todo = ({todo}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  let todoContent;
  const dispatch=useDispatch();
  useEffect(()=>{
    setEditText(todo.text);
  },[todo.text]);
  const handleChange=(event)=>{
    setEditText(event.target.value)
  }
  const handleDelete=()=>{
    dispatch(removeTodo(todo.id));
  }
  const handleUpdate=()=>{
    // console.log(newtext);
    if(editText.trim()!==""){ 
    dispatch(editTodo({id:todo.id,newText:editText}));
  }
    setIsEditing(false);
  }
  if(isEditing){
    todoContent=(
      <div className='flex items-center justify-center'>
        <Input value={editText} onChange={(handleChange)} />
      </div>
    )
  }else{
    todoContent=todo.text;
  }
    return (
    <>
    <div className='flex items-center justify-between w-full'>
        <div className='text-lg w-full '>
            {todoContent}
        </div>
        <div className='ml-65 fixed flex items-center justify-center'>
          {isEditing?(
            <Button onClick={handleUpdate} className={'mt-6'} icon={<IoIosCheckmarkCircle size={20} className={'text-gray-500 mr-2'}/>}/>
          ):<Button onClick={()=>setIsEditing(true)} className={'mt-6'} icon={<FaEdit size={20} className='text-gray-500 mr-2'/>}/>}
            <Button onClick={handleDelete} className={"fixed "} icon={<FaTrash size={20} className='text-gray-500 mr-2'/>} />
        </div>
    </div>
    </>
  )
}

export default Todo