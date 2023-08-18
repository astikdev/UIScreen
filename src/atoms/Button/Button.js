import React from 'react'
import './Button.css'

const Button = (props) => {

  return (
    <> // remove unused tag
        <button  
        className={props.className} // add default class here and also class add on
        {...props}
        >
              {props?.ImageSRC && <img src={props.ImageSRC} alt={props.ImageALT} />} // props name first name naver capital
              <span className='button_text'>{props.text}</span> // how I can change css of this text 
        </button>      

    </>
  )
}

export default Button
