import React from 'react'
const GlassCard = ({ color, tilt, width, height, children }) => {
  let cardwidth
  let cardheight
  let tiltable
  if (tilt === true) {
    tiltable = 'js-tilt'
  } else {
    tiltable = ''
  }
  if (width === null) {
    cardwidth = 10
  } else {
    cardwidth = width
  }
  if (height === null) {
    cardheight = 15
  } else {
    cardheight = height
  }

  return (
    <div
      className={`glass-container ${tiltable} light`}
      style={{
        backgroundColor: color,
        width: `${cardwidth}rem`,
        height: `${cardheight}rem`
      }}
    >
      {children}
    </div>
  )
}

export default GlassCard
