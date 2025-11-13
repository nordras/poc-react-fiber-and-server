'use client'

import { useState } from 'react'
import './view-transitions.scss'

export default function ViewTransitionsPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid')

  return (
    <div className="demo-container">
      <div className="controls">
        <button onClick={() => setView('grid')} className={view === 'grid' ? 'active' : ''}>
          Grid
        </button>
        <button onClick={() => setView('list')} className={view === 'list' ? 'active' : ''}>
          List
        </button>
      </div>
      
      <div className={`items ${view}`}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="item">
            <div className="item-content">Item {i}</div>
          </div>
        ))}
      </div>
    </div>
  )
}