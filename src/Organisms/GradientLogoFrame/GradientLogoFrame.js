import React from 'react'
import './GradientLogoFrame.css'
import GradientShadowFrame from '../../Molecules/GradientShadowFrame/GradientShadowFrame'
import BackgroundFrame from '../../Molecules/BackgroundFrame/BackgroundFrame'
import Img from '../../atoms/Img/Img'


const GradientLogoFrame = (props) => {
  return (
    <BackgroundFrame {...props}>
      <GradientShadowFrame {...props}  />
      {props?.logoImage && (
        <Img {...props}/>
      )}
      {props.children}
    </BackgroundFrame>
  )
}

export default GradientLogoFrame