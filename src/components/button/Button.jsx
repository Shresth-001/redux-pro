import React from 'react'

export const Button = ({onclick, className,text}) => {
  return (
    <div>
        <button onclick={onclick} className={className}>{text}</button>
    </div>
  )
}
