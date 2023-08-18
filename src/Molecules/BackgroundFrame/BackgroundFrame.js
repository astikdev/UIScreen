import React from 'react'
import './BackgroundFrame.css'

const BackgroundFrame = (props) => {
  return (
      <div className={props.mainContainerClass ||'main_container'}>
        <div className={props.backgroundGapClass || 'background__gap'}></div> // if its single closing tag use like <div />
        <div
          className={
            props.backgroundGradientImageClass || // try to reduce the name this is to be as class name
            'background_color_gradient_image'
          }
        >
          {props.children}
        </div>
      </div>
  )
}

export default BackgroundFrame
