import React from 'react'
import './GradientShadowFrame.css'
const GradientShadowFrame = (props) => {
  return (
    <>
      {props?.gradient && <div className='background_gradient'/>}
      {props?.shadow && <div className='background_shadow'/>}
    </>
  )
}
export default GradientShadowFrame