import React from 'react'
import './SignUp.css'
import logo from '../../assets/images/Profile.svg'
import SignUpFooter from '../../Molecules/SignUpFooter/SignUpFooter'
import SignUpDetailForm from '../../Organisms/SignUpDetailForm/SignUpDetailForm'
import GradientLogoFrame from '../../Organisms/GradientLogoFrame/GradientLogoFrame'

const SignUp = () => {
  return (
    <>
      <GradientLogoFrame
        logoImage={true}
        logoClassName='logo'
        LogoSRC={logo}
        logoALT='site-logo'
        shadow={true}
        gradient={true}
      >
        <SignUpDetailForm />
        <SignUpFooter text='Already a Subscriber? ' />
      </GradientLogoFrame>
    </>
  )
}

export default SignUp










