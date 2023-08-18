import React from 'react'
import './GradientShadowFrame.css'
const GradientShadowFrame = (props) => {
  console.log(props)
  return (
    <>
      {props?.gradient && <div className='background_gradient'></div>}
      {props?.shadow && <div className='background_shadow'></div>}
    </>
  )
}

export default GradientShadowFrame