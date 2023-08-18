import React from 'react'
import './Text.css'

const Text = (props) => {
  return (
    <span className={props?.className || 'maintext'} >
      {props.text}
    </span>
  )
}

export default Text