import React from 'react'
import { Button } from '../button/Button'

const Input = ({name='input',value,onChange,type='text',placeholder=null,checked=null,className='px-8 w-70 py-2  rounded-2xl border-r-0 focus:outline-none bg-gray-200'}) => {
  return (
    <div className='flex items-center justify-center mt-5  '>
        <input name={name} value={value} checked={checked} onChange={onChange} placeholder={placeholder} className={className} type={type} />
    </div>
  )
}

export default Input