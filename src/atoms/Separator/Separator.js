import React from 'react'
import './Separator.css'

const Separator = (props) => {
  return (
      <div class='separator'>
        <span>{props.text}</span>
      </div>
  )
}

export default Separator