import './index.css'
import React from 'react'
const GlassCard = ({ color, width, height, children, glassOpacity = 0.5 }) => {
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
  function hexToRgbA(hex) {
    var c
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('')
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]]
      }
      c = '0x' + c.join('')
      return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')
    }
    throw new Error('Bad Hex')
  }

  return (
    <div
      className={`glass-container`}
      style={{
        backgroundColor: `rgba(${hexToRgbA(color)},${glassOpacity})`,
        width: `${cardwidth}rem`,
        height: `${cardheight}rem`
      }}
    >
      {children}
    </div>
  )
}

export default GlassCard
