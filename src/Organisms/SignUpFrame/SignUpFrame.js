import React from 'react'
import GradientShadowFrame from '../../Molecules/GradientShadowFrame/GradientShadowFrame'
import BackgroundFrame from '../../Molecules/BackgroundFrame/BackgroundFrame'
import Img from '../../atoms/Img/Img'

const SignUpFrame = (props) => {
  const {className, src, alt, shadow, gradient, ...rest} = props
  return (
    <BackgroundFrame>
      <GradientShadowFrame shadow={shadow} gradient={gradient} />
      {props?.src && (
        <Img className={className} src={src} alt={alt} rest={rest} />
      )}
      {props.children}
    </BackgroundFrame>
  )
}

export default SignUpFrame
