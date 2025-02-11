import React from 'react'
import './Button.scss'

const Button = ({name}) => {
  return (
    <div>
      <button>{name? name:"Click Me"}</button>
    </div>
  )
}

export default Button
