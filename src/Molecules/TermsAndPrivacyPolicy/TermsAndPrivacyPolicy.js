import React from 'react'
import Text from '../../atoms/Text/Text'
import Link from '../../atoms/Link/Link'
import './TermsAndPrivacyPolicy.css'
const TermsAndPrivacyPolicy = () => {
  return (
    <div className='login-terms'>
      <Text
        text='By using the app I agree to The Sport'
        className='center font-weight-400 color_semi_transparent'
      />
      <div className='space_2' />
      <Link text='Terms of Service ' className='no_underline ' />
      <Text
        text='&'
        className='center font-weight-400 color_semi_transparent'
      />
      <Link text=' Privacy Policy' className='no_underline ' />
    </div>
  )
}

export default TermsAndPrivacyPolicy