'use client'

import { useState } from 'react'
import './has-selector.scss'

export default function HasSelectorPage() {
  const [hasError, setHasError] = useState(false)

  return (
    <div className="demo-container">
      <form className={`demo-form ${hasError ? 'has-error' : ''}`}>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            onChange={(e) => setHasError(!e.target.validity.valid && e.target.value.length > 0)}
          />
          {hasError && <span className="error">Invalid email</span>}
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input type="password" />
        </div>
      </form>
    </div>
  )
}