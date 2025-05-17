import React from 'react'
import '../styles/Styles.css'
import { Home, Settings, BarChart2, Eye, LogOut } from 'lucide-react'

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar-left ${isOpen ? 'open' : 'closed'}`}>
      <ul className="sidebar-menu">
        <li>
          <Home size={24} />
          <span>Home</span>
        </li>
        <li>
          <Settings size={24} />
          <span>Settings</span>
        </li>
        <li>
          <BarChart2 size={24} />
          <span>Analytics</span>
        </li>
        <li>
          <Eye size={24} />
          <span>View</span>
        </li>
        <li>
          <LogOut size={24} />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar

