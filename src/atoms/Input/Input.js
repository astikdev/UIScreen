import React from 'react'
import './Input.css'
import {Field, ErrorMessage} from 'formik'

const Input = (props) => {
  return (
    <div className='main'>
      <div className='input_type'>
        {props?.imageSrc && <img src={props.imageSrc} alt={props.imageAlt} />}
        <Field
          name={props.name}
          type={props.type}
          placeholder={props?.inputPlaceholder}
          // {...props}
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
