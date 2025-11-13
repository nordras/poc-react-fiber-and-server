'use client'

import { useState } from 'react'
import './trigonometry.scss'

export default function TrigonometryPage() {
  const [count] = useState(8)

  return (
    <div className="demo-container">
      <div className="circle-container">
        {Array.from({ length: count }).map((_, i) => (
          <div 
            key={i} 
            className="circle-item"
            style={{ 
              '--index': i,
              '--total': count 
            } as React.CSSProperties}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}