import React from 'react'
import './Img.css'
// import 'Image.css'
const Image = (props) => {
  return (
    <>
        <img
          className={props?.logoClassName}
          src={props?.LogoSRC}
          alt={props?.logoALT} // where do i pass extra propos?
        />
    </>
  )
}

export default Image