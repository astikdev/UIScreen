import React from 'react'
import Text from '../../atoms/Text/Text'
import Link from '../../atoms/Link/Link'
import './TermsAndPrivacyPolicy.css'
const TermsAndPrivacyPolicy = () => {
  return (
    <div className='login-terms'>
      <Text
        text='By using the app I agree to The Sport'
        className='center font-weight-400 color_whiter-semi-transperant'
      />
      <div className='space_2'></div> // closting tag or remove this and add this class name in text 
      <Link
        text='Terms of Service '
        href='#login' // if you dont hae redirection uer dont pass this propos
        className='no_underline '
      />
      <Text
        text='&'
        className='center font-weight-400 color_whiter-semi-transperant' // try to use class name relevent and min
      />
      <Link text=' Privacy Policy' href='#login' className='no_underline ' /> // if you dont hae redirection uer dont pass this propos
    </div>
  )
}

export default TermsAndPrivacyPolicy