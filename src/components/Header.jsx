import React from 'react'; 
import '../styles/Styles.css';
import { Menu, RefreshCcw, User } from 'lucide-react';  

const Header = ({toggle}) => {
  return (
    <div className="header">
      <button className="icon-button" onClick={toggle}>
        <Menu size={20} />
      </button>
      <h1 className="logo">Moonarch</h1>
      <div className="header-actions">
        <button className="icon-button">
          <RefreshCcw size={20} />
        </button>
        <button className="icon-button">
          <User size={20} />
        </button>
      </div>
    </div>
  )
}

export default Header

