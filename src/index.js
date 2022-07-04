import './index.css'
import React from 'react'
const GlassCard = ({ color, width, height, children }) => {
  let cardwidth
  let cardheight

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
      className={`glass-container`}
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
