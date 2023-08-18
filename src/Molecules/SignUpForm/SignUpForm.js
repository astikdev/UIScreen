import React, {useState} from 'react'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import icon from '../../assets/images/User.svg'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'

const SignUpForm = () => {
  const initialValues = {
    name: '',
    email: '',
  }
  const [forminitialValues, setForminitialValues] = useState(initialValues)

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Too Short Name!')
      .max(70, 'Too Long Name!')
      .required('Name Is Required!'),
    email: Yup.string()
      .email('Invalid Email Id!')
      .required('Email Is Required!'),
  })

  const handleSubmit = (values) => {
    console.log(values)
    setForminitialValues(initialValues)
  }
  return (
    <Formik
      initialValues={forminitialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Input
          type='text'
          name='name'
          imageSrc={icon}
          imageAlt='UserName Input'
          inputPlaceholder='Name'
        />
        <Input
          type='text'
          name='email'
          imageSrc={icon}
          imageAlt='Email Input'
          inputPlaceholder='Email'
        />
        <Button type='submit' className='form_submit_Button' text='Continue' />
      </Form>
    </Formik>
  )
}

export default SignUpForm
