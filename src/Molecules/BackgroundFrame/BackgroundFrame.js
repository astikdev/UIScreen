import React from 'react'
import './BackgroundFrame.css'

const BackgroundFrame = (props) => {
  return (
    <div className={props.containerClassName || 'main_container'}>
      <div className={props.gapClassName || 'bg_gap'} />
      <div className={props.GradientImgClassName || 'gradient_image'}>
        {props.children}
      </div>
    </div>
  )
}

export default BackgroundFrame
