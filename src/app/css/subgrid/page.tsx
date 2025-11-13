import './subgrid.scss'

export default function SubgridPage() {
  const items = [
    { title: 'Item One', description: 'Short description' },
    { title: 'Item Two', description: 'This is a much longer description that will span multiple lines' },
    { title: 'Item Three', description: 'Medium length description here' },
  ]

  return (
    <div className="demo-container">
      <div className="grid-container">
        {items.map((item, i) => (
          <div key={i} className="grid-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button>Action</button>
          </div>
        ))}
      </div>
    </div>
  )
}