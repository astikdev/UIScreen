import React from 'react'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import icon from '../../assets/images/User.svg'
import './SignUpForm.css'
import {Formik, Form} from 'formik'
import * as Yup from 'yup';

const SignUpForm = () => {
  const initialValues={
    name: '',
    email: '',
  }
  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
  })

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues = {initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>

      <Form>
          <Input
            type='text'
            name='name'
            imageSRC={icon}
            ImageALT='UserName Input'
            InputPlaceholder='Name'
          />
          <Input
            type='text'
            name='email'
            imageSRC={icon}
            ImageALT='Email Input'
            InputPlaceholder='Email'
          />
          <Button type='submit' className='form_submit_Button' text='Continue' spanText={false} />
      </Form>

    </Formik>
  )
}

export default SignUpForm