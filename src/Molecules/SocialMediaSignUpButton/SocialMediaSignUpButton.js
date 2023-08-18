import React from 'react'
import Button from '../../atoms/Button/Button'
import googleicon from '../../assets/images/Google.svg'
import facebookicon from '../../assets/images/Facebook.svg'
import './SocialMediaSignUpButton.css'

const SocialMediaSignUpButton = (props) => {
  return (
      <div className='text-center button_large_screen'>
        <Button
          className='socialmedia_signup'
          imageSrc={googleicon}
          imageAlt='google logo'
          textClassName='button_text'
          text='Continue with Google'
        />
        <Button
          className='socialmedia_signup'
          imageSrc={facebookicon}
          imageAlt='Facebook logo'
          textClassName='button_text'
          text='Continue with Facebook'
        />
      </div>
  )
}

export default SocialMediaSignUpButton
