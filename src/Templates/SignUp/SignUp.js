import React from 'react'
import './SignUp.css'
import logo from '../../assets/images/Profile.svg'
import SignUpFooter from '../../Organisms/SignUpFooter/SignUpFooter'
import SignUpDetailForm from '../../Organisms/SignUpDetailForm/SignUpDetailForm'
import GradientLogoFrame from '../../Organisms/GradientLogoFrame/GradientLogoFrame'

const SignUp = () => {
  return (
    <>
      <GradientLogoFrame
        className='logo'
        src={logo}
        alt='site-logo'
        shadow={true}
        gradient={true}
      >
        <SignUpDetailForm />
        <SignUpFooter
          text='Already a Subscriber? '
          linkText='Log In'
          linkClassName='underline'
        />
      </GradientLogoFrame>
    </>
  )
}

export default SignUp
