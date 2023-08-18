import React from 'react'
import './SignUpDetailForm.css'
import SocialMediaSignUpButton from '../../Molecules/SocialMediaSignUpButton/SocialMediaSignUpButton'
import Separator from '../../atoms/Separator/Separator'
import SignUpForm from '../../Molecules/SignUpForm/SignUpForm'
import TermsAndPrivacyPolicy from '../../Molecules/TermsAndPrivacyPolicy/TermsAndPrivacyPolicy'
import Text from '../../atoms/Text/Text'

const SignUpDetailForm=(props)=> {
  return (
    <>
      <Text text='Create an Account' className='title'/>
      <SocialMediaSignUpButton />
      <Separator text='or' />
      <SignUpForm />
      <TermsAndPrivacyPolicy />
    </>
  )
}

export default SignUpDetailForm