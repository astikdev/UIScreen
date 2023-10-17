import React from 'react'
import './Img.css'

const Image = (props) => {
  return (
    <>
      <img
        className={props?.className}
        src={props?.src}
        alt={props?.alt}
        {...props}
      />
    </>
  )
}

export default Image
