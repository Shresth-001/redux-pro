import React from 'react'

export const Button = ({onClick, className,text}) => {
  return (
    <div>
        <button onClick={onClick} className={className}>{text}</button>
    </div>
  )
}
