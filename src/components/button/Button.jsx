import React from 'react'

export const Button = ({onClick, className,text=null,icon=null}) => {
  return (
    <div>
        <button onClick={onClick} className={className}>{icon}{text}</button>
    </div>
  )
}
