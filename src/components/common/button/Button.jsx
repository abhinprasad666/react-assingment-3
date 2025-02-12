import React from 'react'
import './Button.scss'

const Button = ({name,status,children}) => {
  return (
    <div>
      <button className={status }>
        
        {name? name:"Click Me"} {children} </button>
     
    </div>
  )
}

export default Button
