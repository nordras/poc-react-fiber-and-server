import './viewport-units.scss'

export default function ViewportUnitsPage() {
  return (
    <div className="demo-container">
      <div className="viewport-demo">
        <div className="box vh">
          <span>100vh</span>
          <small>Traditional</small>
        </div>
        <div className="box dvh">
          <span>100dvh</span>
          <small>Dynamic</small>
        </div>
        <div className="box svh">
          <span>100svh</span>
          <small>Small</small>
        </div>
      </div>
    </div>
  )
}