import './nesting.scss'

export default function NestingPage() {
  return (
    <div className="demo-container">
      <div className="card">
        <div className="card-header">
          <h3>CSS Nesting</h3>
        </div>
        <div className="card-body">
          <p>Native CSS nesting without preprocessors</p>
          <button className="btn">Primary</button>
          <button className="btn secondary">Secondary</button>
        </div>
      </div>
    </div>
  )
}