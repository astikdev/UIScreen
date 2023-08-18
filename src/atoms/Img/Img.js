import React from 'react'
import './Img.css'
// import 'Image.css'
const Image = (props) => {
  return (
    <>
        <img
          className={props?.logoClassName}
          src={props?.LogoSRC}
          alt={props?.logoALT}
        />
    </>
  )
}

export default Image