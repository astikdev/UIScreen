import React from 'react'
import './SignUpFooter.css'
import Link from '../../atoms/Link/Link'

const SignUpFooter = (props) => {
  return (
    <div className='fullwidth'>
      <div className='footer'>
        <p className='footer_text'> 
          {props.text} // use text component herer
          <Link className='underline' href='#login' text='Log In' /> // remove href propos
        </p>
      </div>
    </div>
  )
}

export default SignUpFooter