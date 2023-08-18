import React from 'react'
import './SignUpFooter.css'
import Link from '../../atoms/Link/Link'

const SignUpFooter = (props) => {
  return (
    <div className='fullwidth'>
      <div className='footer'>
        <p className='footer_text'>
          {props.text}
          <Link className='underline' href='#login' text='Log In' />
        </p>
      </div>
    </div>
  )
}

export default SignUpFooter