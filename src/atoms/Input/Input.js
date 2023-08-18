import React from 'react'
import './Input.css'
import {Field, ErrorMessage} from 'formik';

const Input = (props) => {
  return (
    <div className='main'>
      <div className='input_type'>
        {props?.imageSRC && <img src={props.imageSRC} alt={props.ImageALT} />}
        <Field
          name={props.name}
          type={props.type}
          placeholder={props?.InputPlaceholder} // add extra propos first latter navew capital in propos
        />
      </div>
      <ErrorMessage
        name={props.name}
        className='error-message'
        component='div'
      />
    </div>
  )
}

export default Input
