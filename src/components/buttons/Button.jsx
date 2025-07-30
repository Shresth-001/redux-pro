import React from 'react'

function Button({onClick,className,text}) {
  return (
    <div>
        <button onClick={onClick} className={className} >{text}</button>
    </div>
  )
}

export default Button