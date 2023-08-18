import React from 'react'
import './BackgroundFrame.css'

const BackgroundFrame = (props) => {
  return (
      <div className={props.mainContainerClass ||'main_container'}>
        <div className={props.backgroundGapClass || 'background__gap'}></div>
        <div
          className={
            props.backgroundGradientImageClass ||
            'background_color_gradient_image'
          }
        >
          {props.children}
        </div>
      </div>
  )
}

export default BackgroundFrame
