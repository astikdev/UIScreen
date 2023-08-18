import React from 'react'
import Button from '../../atoms/Button/Button'
import googleicon from '../../assets/images/Google.svg'
import facebookicon from '../../assets/images/Facebook.svg'
import './SocialMediaSignUpButton.css'

const SocialMediaSignUpButton = (props) => {
  return (
    <>
      <h2 className='title'>Create an Account</h2>
      <div className='text-center button_large_screen'>
        <Button
          className='socialmedia_signup'
          text='Continue with Google'
          ImageSRC={googleicon}
          ImageALT='google logo'
        />
        <Button
          className='socialmedia_signup'
          text='Continue with Facebook'
          ImageSRC={facebookicon}
          ImageALT='Facebook logo'
        />
      </div>
    </>
  )
}

export default SocialMediaSignUpButton