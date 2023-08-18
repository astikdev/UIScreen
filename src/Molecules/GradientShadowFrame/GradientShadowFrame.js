import React from 'react'
import './GradientShadowFrame.css'
const GradientShadowFrame = (props) => {
  return (
    <>
      {props?.gradient && <div className='background_gradient'></div>} // use closing tag
      {props?.shadow && <div className='background_shadow'></div>} // use closing tag
    </>
  )
}
export default GradientShadowFrame