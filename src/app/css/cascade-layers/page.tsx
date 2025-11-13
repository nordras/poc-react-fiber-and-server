import './cascade-layers.scss'

export default function CascadeLayersPage() {
  return (
    <div className="demo-container">
      <div className="layer-demo">
        <button className="btn base-style">Base Layer</button>
        <button className="btn component-style">Component Layer</button>
        <button className="btn utility-override">Utility Layer</button>
      </div>
    </div>
  )
}