import React from 'react'
import './Button.css'
import Text from '../Text/Text'

const Button = (props) => {
  return (
    <button className={props.className || 'form_submit_Button'} {...props}>
      {props?.imageSrc && <img src={props.imageSrc} alt={props.imageAlt} />}
      <Text className={props.textClassName} text={props.text} />
    </button>
  )
}

export default Button
