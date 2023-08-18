import React from 'react'
import './GradientLogoFrame.css'
import GradientShadowFrame from '../../Molecules/GradientShadowFrame/GradientShadowFrame'
import BackgroundFrame from '../../Molecules/BackgroundFrame/BackgroundFrame'
import Img from '../../atoms/Img/Img'

const GradientLogoFrame = (props) => {
  const {className, src, alt, shadow, gradient} = props
  return (
    <BackgroundFrame>
      <GradientShadowFrame shadow={shadow} gradient={gradient} />
      {props?.src && <Img className={className} src={src} alt={alt} />}
      {props.children}
    </BackgroundFrame>
  )
}

export default GradientLogoFrame
