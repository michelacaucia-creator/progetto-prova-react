import './App.css';
import { useEffect,useState } from 'react';
import Sidebar from './components/sidebar';
 import RouterComponent from './components/routerComponent';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import itFlag from '../src/images/it-flag.png'
import ukFlag from '../src/images/uk-flag.png';
import Button from 'react-bootstrap/Button';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import NavBar from './components/navBar/navBar';



  // Errore - useLocation() may be used only in the context of a <Router> component
  // Wrapper per usare useLocation fuori dal componente App
  function AppWrapper() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }

function App() {
  // serve per verificare utente loggato
  const [userLogged,setUserLogged] =useState(sessionStorage.getItem("userLogged"));
  //serve per la traduzione
  const { t, i18n } = useTranslation();
  // gestione token
  const [token, setToken] = useState(sessionStorage.getItem("tokenSession"));
  // gestione ????
  const [fileContent, setFileContent] = useState('');
  //gestione dello spinner (clessidra - rotellina elaborazione)
  const [showSpinner, setShowSpinner] = useState(false);
  const setToShoSpinner = (value) => { setShowSpinner(value) } 
  //gestione lingua
  const handleChangeLanguage = (lang) => { i18n.changeLanguage(lang); };
  // gestione logout
  const handleLogout= () => {
        sessionStorage.removeItem("userLogged", false);
        sessionStorage.removeItem("userName",'');
        window.location.reload();
  }

  // serve per informazioni su URL
  const location = useLocation();
  //nascondere il footer
  const hideFooterOnPaths = ['/login', '/registration','/info'];
  const shouldHideFooter = hideFooterOnPaths.includes(location.pathname);

  // serve per inserire un delay nel passaggio di pagina info
  const navigate = useNavigate();
  const goToInfoWithDelay = () => {
    setToShoSpinner(true); // mostra lo spinner se vuoi
    setTimeout(() => {
      navigate('/info');
    }, 2000); // 2 secondi di delay
  };
  
  return (
    <div className="Container">
      <div className="HeaderBar">
        <div className='navBar'>
          {/*richiamo il componente*/}
          <NavBar colore={'red'}/>
          <NavBar colore={'blue'}/>
        </div>
        <div className="LeftHeaderBar">
          <Link to="/" className="App-header">
            {t("E-Commerce training")}
          </Link>
          <Link to="/">
            <span style={{ color: 'white', fontWeight: 'bold', padding: '30px' }}>
              <i className="bi bi-house"></i>
            </span>
          </Link>
        </div>

        <div className="RightHeaderBar">
          <div className="Flags">
            <img src={itFlag} alt="Italiano" className="flag-icon" onClick={() => handleChangeLanguage('it')} />
            <img src={ukFlag} alt="English" className="flag-icon" onClick={() => handleChangeLanguage('en')} />
          </div>

          {!userLogged && (
            <div className="buttons">
              <Link to="/login">
                <Button style={{ marginLeft: '10px' }}>Login</Button>
              </Link>
              <Link to="/registration">
                <Button style={{ marginLeft: '10px' }}>Registrati</Button>
              </Link>
            </div>
          )}

          {userLogged && (
            <div className="buttonLogout">
              <Link to="/">
                <Button style={{ marginLeft: '10px' }} onClick={handleLogout}>
                  Logout
                </Button>
              </Link>
            </div>
          )}
           {userLogged && (
            <div className='nomeLog'>
               {`Ciao ${(sessionStorage.getItem("userName")).split("@")[0]}`}
            </div>  
           )}

        </div>
      </div>

      {showSpinner && <div className="spinner"></div>}
      <div className="Main">
        {userLogged && <Sidebar setToShoSpinner={setToShoSpinner} />}
        <div className="Content">
          <RouterComponent setToShoSpinner={setToShoSpinner} callBack={setUserLogged} />
        </div>
      </div>

      {/* Mostra il footer solo se non siamo su login o registration o info*/}
      {!shouldHideFooter && (
        <div className="info">
          <footer>
            <p>&copy; 2025 Web Solutions. Tutti i diritti riservati</p>
            {/*<Link to="/info" className="custom-link"><i className="bi bi-info-circle"></i> Info</Link>*/}
            {/* Aggiunto il delay */}
            <button onClick={goToInfoWithDelay} className="custom-link"> <i className="bi bi-info-circle"></i> Info</button>
          </footer>
        </div>
      )}
    </div>
  );
}

export default AppWrapper;
    