import './global/styles.css'

import React, { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { ExampleComponent } from 'react-glasscards'
import GlassCard from './GlassCard/GlassCard'
// import 'react-glasscards/dist/index.css'

const App = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.js-tilt'), {
      max: 7,
      glare: true
    })
  }, [])

  return (
    <GlassCard
      color={'rgba(116, 125, 140, 0.4)'}
      tilt={true}
      width={10}
      height={15}
    >
      <p>This is heading</p>
      <h1>This is heading</h1>
    </GlassCard>
  )
}

export default App
