import React from 'react'
import './SignUp.css'
import logo from '../../assets/images/Profile.svg'
import SignUpFooter from '../../Organisms/SignUpFooter/SignUpFooter'
import SignUpDetailForm from '../../Organisms/SignUpDetailForm/SignUpDetailForm'
import SignUpFrame from '../../Organisms/SignUpFrame/SignUpFrame'

const SignUp = () => {
  return (
    <>
      <SignUpFrame
        className='logo'
        src={logo}
        alt='site-logo'
        shadow={true}
        gradient={true}
      >
        <SignUpDetailForm />
        <SignUpFooter
          className='footer_text'
          text='Already a Subscriber? '
          linkText='Log In'
          linkClassName='underline'
        />
      </SignUpFrame>
    </>
  )
}

export default SignUp
