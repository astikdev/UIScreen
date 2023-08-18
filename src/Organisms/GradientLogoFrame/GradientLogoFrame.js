import React from 'react'
import './GradientLogoFrame.css'
import GradientShadowFrame from '../../Molecules/GradientShadowFrame/GradientShadowFrame'
import BackgroundFrame from '../../Molecules/BackgroundFrame/BackgroundFrame'
import Img from '../../atoms/Img/Img'


const GradientLogoFrame = (props) => {
  return (
    <BackgroundFrame {...props}> // why same propos passing 3 component ?
      <GradientShadowFrame {...props}  /> // why same propos passing 3 component ?
      {props?.logoImage && (
        <Img {...props}/> // why same propos passing 3 component ? propos with spred oprater only be used in atoms
      )}
      {props.children}
    </BackgroundFrame>
  )
}

export default GradientLogoFrame