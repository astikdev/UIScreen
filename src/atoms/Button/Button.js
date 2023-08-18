import React from 'react'
import './Button.css'

const Button = (props) => {

  return (
    <>
        <button  
        className={props.className} 
        {...props}
        >
              {props?.ImageSRC && <img src={props.ImageSRC} alt={props.ImageALT} />}
              <span className='button_text'>{props.text}</span>
        </button>      

    </>
  )
}

export default Button
