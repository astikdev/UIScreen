import React from 'react'
import './Link.css'

const Link = (props) => {
  return (
    <span> // what is the use of span tag
      <a className={props.className} href={props?.href || '#'}>{props.text}</a>
    </span>
  )
}

export default Link  