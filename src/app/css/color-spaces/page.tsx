'use client'

import { useState } from 'react'
import './color-spaces.scss'

export default function ColorSpacesPage() {
  const [hue, setHue] = useState(250)

  return (
    <div className="demo-container">
      <div className="color-demo">
        <div 
          className="color-box oklch"
          style={{ '--hue': hue } as React.CSSProperties}
        >
          <span>OKLCH</span>
        </div>
        <div 
          className="color-box rgb"
          style={{ '--hue': hue } as React.CSSProperties}
        >
          <span>RGB</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="360" 
          value={hue}
          onChange={(e) => setHue(Number(e.target.value))}
        />
        <p>Hue: {hue}°</p>
      </div>
    </div>
  )
}