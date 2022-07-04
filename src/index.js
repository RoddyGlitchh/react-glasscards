import './index.css'
import React from 'react'
const GlassCard = ({
  style,
  color,
  width,
  height,
  children,
  glassOpacity = 0.5
}) => {
  let cardwidth = width === null ? 10 : width
  let cardheight = height === null ? 15 : height

  function hexToRgbA(hex) {
    var c
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('')
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]]
      }
      c = '0x' + c.join('')
      return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')
    } else {
      return hex
    }
  }

  return (
    <div
      className={`glass-container`}
      style={{
        ...style,
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
