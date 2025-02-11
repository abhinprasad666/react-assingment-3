import React from 'react'
import './Button.scss'

const Button = ({name,children}) => {
  return (
    <div>
      <button>{name? name:"Click Me"}</button>
    </div>
  )
}

export default Button
