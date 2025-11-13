'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './Sidebar.scss'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/css/container-queries', label: 'Container Queries' },
  { href: '/css/has-selector', label: ':has() Selector' },
  { href: '/css/nesting', label: 'CSS Nesting' },
  { href: '/css/cascade-layers', label: 'Cascade Layers' },
  { href: '/css/color-spaces', label: 'Color Spaces' },
  { href: '/css/subgrid', label: 'Subgrid' },
  { href: '/css/view-transitions', label: 'View Transitions' },
  { href: '/css/trigonometry', label: 'Trigonometry' },
  { href: '/css/viewport-units', label: 'Viewport Units' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>CSS Modern Features</h1>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? 'active' : ''}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}