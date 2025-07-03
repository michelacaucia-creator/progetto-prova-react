import React, { useState } from 'react';
import './sidebar.css'
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className="sidebar">
      <div className="menu-item">
        <div className="menu-title" onClick={() => setIsOpen1(!isOpen1)}>
          PROVA 1 {isOpen1 ? '▲' : '▼'}
        </div>
        {isOpen1 && (
          <div className="submenu">
            <Link to="/prova1.1" className="submenu-link">Prova 1.1</Link>
            <Link to="/prova1.2" className="submenu-link">Prova 1.2</Link>
          </div>
        )}
      </div>

      <div className="menu-item">
        <div className="menu-title" onClick={() => setIsOpen2(!isOpen2)}>
          PROVA 2 {isOpen2 ? '▲' : '▼'}
        </div>
        {isOpen2 && (
          <div className="submenu">
            <Link to="/prova2.1" className="submenu-link">Prova 2.1</Link>
            <Link to="/prova2.2" className="submenu-link">Prova 2.2</Link>
          </div>
        )}
      </div>

      <div className="menu-item">
        <div className="menu-title" onClick={() => setIsOpen3(!isOpen3)}>
          PROVA 3 {isOpen3 ? '▲' : '▼'}
        </div>
        {isOpen3 && (
          <div className="submenu">
            <Link to="/prova3.1" className="submenu-link">Prova 3.1</Link>
            <Link to="/prova3.2" className="submenu-link">Prova 3.2</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
