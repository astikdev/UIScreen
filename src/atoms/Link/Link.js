import React from 'react'
import './Link.css'

const Link = (props) => {
  return (
    <span>
      <a className={props.className} href={props?.href || '#'}>{props.text}</a>
    </span>
  )
}

export default Link  