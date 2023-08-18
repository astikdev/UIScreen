import React from 'react'
import './Link.css'

const Link = (props) => {
  return (
      <a className={props.className} href={props?.href || '#'}>{props.text}</a>
  )
}

export default Link  