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

  const glass_style = {
    padding: '10px',
    borderRadius: '8px',
    backdropFilter: 'blur(10px)',
    border: 'solid 1px rgba(255, 255, 255, 0.18)',
    boxShadow: 'inset',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
    maxWidth: '25rem',
    maxHeight: '40rem',
    overflow: 'hidden',
    position: 'relative',
    margin: '4rem'
  }

  return (
    <div
      className={`glass-container`}
      style={{
        glass_style,
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
