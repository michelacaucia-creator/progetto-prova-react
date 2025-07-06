import React, { useState } from 'react';
import './sidebar.css'
import { Link } from 'react-router-dom';
import itFlag from '../images/it-flag.png'; // bandierina italiana
import ukFlag from '../images/uk-flag.png'; // bandierina inglese
import { useTranslation } from 'react-i18next';

function Sidebar({setToShoSpinner}) {
  
  //serve per la traduzione
  const { t, i18n } = useTranslation();

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  // Handle che gestisce il cambio lingua 
  const handleChangeLanguage = (lang) => {
    console.log(`Lingua cambiata in: ${lang}`);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="sidebar">
      <div className="menu-item">
        <div className="menu-title" onClick={() => setIsOpen1(!isOpen1)}>
          {t("PROVA 1")} {isOpen1 ? '▲' : '▼'}
        </div>
        {isOpen1 && (
          <div className="submenu">

            <Link to="/prova1.1" className="submenu-link" onClick={() => setToShoSpinner(true)}>
            {t("Prova 1.1")}
            </Link>
            
            <Link to="/prova1.2" className="submenu-link" onClick={() => setToShoSpinner(true)}>
            {t("Prova 1.2")}
            </Link>

          </div>
        )}
      </div>

      <div className="menu-item">
        <div className="menu-title" onClick={() => setIsOpen2(!isOpen2)}>
          {t("PROVA 2")} {isOpen2 ? '▲' : '▼'}
        </div>
        {isOpen2 && (
          <div className="submenu">

            <Link to="/prova2.1" className="submenu-link" onClick={() => setToShoSpinner(true)}>
            {t("Prova 2.1")}
            </Link>

            <Link to="/prova2.2" className="submenu-link" onClick={() => setToShoSpinner(true)}>
            {t("Prova 2.2")}
            </Link>

          </div>
        )}
      </div>

      <div className="menu-item">
        <div className="menu-title" onClick={() => setIsOpen3(!isOpen3)}>
          {t("PROVA 3")} {isOpen3 ? '▲' : '▼'}
        </div>
        {isOpen3 && (
          <div className="submenu">

            <Link to="/prova3.1" className="submenu-link" onClick={() => setToShoSpinner(true)}>
            {t("Prova 3.1")}
            </Link>

            <Link to="/prova3.2" className="submenu-link" onClick={() => setToShoSpinner(true)}>
            {t("Prova 3.2")}
            </Link>
            
          </div>
        )}
      </div>

      {/* Bandiera traduzione  */}
      <div className="language-switcher">
        <img src={itFlag} alt="Italiano" className="flag-icon" onClick={() => handleChangeLanguage('it')}/>
        <img src={ukFlag} alt="English" className="flag-icon" onClick={() => handleChangeLanguage('en')}/>
      </div>

    </div>
  );
}

export default Sidebar;
