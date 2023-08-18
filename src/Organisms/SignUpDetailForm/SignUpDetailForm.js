import React from 'react'
import './SignUpDetailForm.css'
import SocialMediaSignUpButton from '../../Molecules/SocialMediaSignUpButton/SocialMediaSignUpButton'
import Separator from '../../atoms/Separator/Separator'
import SignUpForm from '../../Molecules/SignUpForm/SignUpForm'
import TermsAndPrivacyPolicy from '../../Molecules/TermsAndPrivacyPolicy/TermsAndPrivacyPolicy'

const SignUpDetailForm=(props)=> {
  return (
    <>
      <SocialMediaSignUpButton />
      <Separator />
      <SignUpForm />
      <TermsAndPrivacyPolicy />
    </>
  )
}

export default SignUpDetailForm