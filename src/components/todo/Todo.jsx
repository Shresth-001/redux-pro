import React from 'react'

const Todo = ({todo}) => {
  let todoContent=todo.text;
    return (
    <>
    <div className='flex items-center justify-evenly w-full'>
        <div className='text-lg font-bold w-full'>
            {todoContent}
        </div>
    </div>
    </>
  )
}

export default Todo