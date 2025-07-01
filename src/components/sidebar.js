import React, { useState } from 'react';
import './sidebar.css'

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
            <div>Prova 1.1</div>
            <div>Prova 1.2</div>
          </div>
        )}
      </div>

      <div className="menu-item">
        <div className="menu-title" onClick={() => setIsOpen2(!isOpen2)}>
          PROVA 2 {isOpen2 ? '▲' : '▼'}
        </div>
        {isOpen2 && (
          <div className="submenu">
            <div>Prova 2.1</div>
            <div>Prova 2.2</div>
          </div>
        )}
      </div>

      <div className="menu-item">
        <div className="menu-title" onClick={() => setIsOpen3(!isOpen3)}>
          PROVA 3 {isOpen3 ? '▲' : '▼'}
        </div>
        {isOpen3 && (
          <div className="submenu">
            <div>Prova 3.1</div>
            <div>Prova 3.2</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
