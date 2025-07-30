import React from 'react'
import { Button } from '../button/Button'

const Input = ({value,onChange,placeholder ,className='px-8 w-80 py-2  rounded-2xl border-r-0 focus:outline-none bg-gray-200'}) => {
  return (
    <div className='flex items-center justify-center mt-5 relative '>
        <input value={value} onChange={onChange} placeholder={placeholder} className={className} type="text" />
        <Button className={"px-10 py-2 rounded-2xl mt-5bg bg-red-300"} text={"ADD"}/>
    </div>
  )
}

export default Input