import './container-queries.scss'

export default function ContainerQueriesPage() {
  return (
    <div className="demo-container">
      <div className="card-grid">
        <div className="card">
          <img src="https://picsum.photos/400/300" alt="Sample" />
          <h3>Responsive Card</h3>
          <p>This card adapts based on container width, not viewport</p>
        </div>
      </div>
    </div>
  )
}