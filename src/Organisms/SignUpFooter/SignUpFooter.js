import React from 'react'
import './SignUpFooter.css'
import Link from '../../atoms/Link/Link'
import Text from '../../atoms/Text/Text'

const SignUpFooter = (props) => {
  return (
    <div className={props.footerClass || 'footer'}>
      <p className={props.footerTextClass || 'footer_text'}>
        {props.text && <Text text={props.text} />}
        {props.linkText && (
          <Link className={props.linkClassName} text={props.linkText} />
        )}
      </p>
    </div>
  )
}

export default SignUpFooter