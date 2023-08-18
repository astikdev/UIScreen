import React from 'react'
import './Text.css'

const Text = (props) => {
  return (
    <span className={props.className} >
      {props.text}
    </span>
  )
}

export default Text