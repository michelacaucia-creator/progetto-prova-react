import React, { useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Sidebar({ setToShoSpinner }) {
  const { t, i18n } = useTranslation();

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    <div
      className={`sidebar ${sidebarOpen ? 'expanded' : 'collapsed'}`}
      onMouseEnter={() => setSidebarOpen(true)}
      onMouseLeave={() => setSidebarOpen(false)}
    >
      {/* Icona hamburger che appare solo in collapsed */}
      {!sidebarOpen && (
        <div className="hamburger-icon" onClick={() => setSidebarOpen(true)}>
          <div />
          <div />
          <div />
        </div>
      )}

      {/* Menu */}
      {sidebarOpen && (
        <>
          <div className="menu-container">
            <div className="menu-item">

              <div
                className={`menu-title ${isOpen1 ? 'open' : ''}`}
                onClick={() => setIsOpen1(!isOpen1)}
              >
                {t("PROVA_1")} 
                <span className="arrow">{isOpen1 ? '▲' : '▼'}</span>
              </div>

              <div className={`submenu ${isOpen1 ? 'open' : ''}`}>
                <Link to="/prova1.1" className="submenu-link" onClick={() => setToShoSpinner(true)}>
                  {t("Prova 1.1")}
                </Link>
                <Link to="/prova1.2" className="submenu-link" onClick={() => setToShoSpinner(true)}>
                  {t("Prova 1.2")}
                </Link>
              </div>

            </div>

            <div className="menu-item">
              <div
                className={`menu-title ${isOpen2 ? 'open' : ''}`}
                onClick={() => setIsOpen2(!isOpen2)}
              >
                {t("PROVA_2")}
                <span className="arrow">{isOpen2 ? '▲' : '▼'}</span>
              </div>

              <div className={`submenu ${isOpen2 ? 'open' : ''}`}>
                <Link to="/prova2.1" className="submenu-link" onClick={() => setToShoSpinner(true)}>
                  {t("Prova 2.1")}
                </Link>
                <Link to="/prova2.2" className="submenu-link" onClick={() => setToShoSpinner(true)}>
                  {t("Prova 2.2")}
                </Link>
              </div>

            </div>

            <div className="menu-item">
              <div
                className={`menu-title ${isOpen3 ? 'open' : ''}`}
                onClick={() => setIsOpen3(!isOpen3)}
              >
                {t("PROVA_3")}
                <span className="arrow">{isOpen3 ? '▲' : '▼'}</span>
              </div>

              <div className={`submenu ${isOpen3 ? 'open' : ''}`}>
                <Link to="/prova3.1" className="submenu-link" onClick={() => setToShoSpinner(true)}>
                  {t("Prova 3.1")}
                </Link>
                <Link to="/prova3.2" className="submenu-link" onClick={() => setToShoSpinner(true)}>
                  {t("Prova 3.2")}
                </Link>
              </div>

            </div>
          </div>

        </>
      )}
    </div>
  );
}

export default Sidebar;
