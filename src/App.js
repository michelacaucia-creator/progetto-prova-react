import './App.css';
import { useEffect,useState } from 'react';
//import axios from 'axios';
import Sidebar from './components/sidebar';
import mareImage from './images/mare.jpg';  
import RouterComponent from './components/routerComponent';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import itFlag from '../src/images/it-flag.png'
import ukFlag from '../src/images/uk-flag.png';
import Button from 'react-bootstrap/Button';

function App() {
    const [userLogged,setUserLogged] =useState(sessionStorage.getItem("userLogged"));
  //serve per la traduzione
  const { t, i18n } = useTranslation();

  const [token, setToken] = useState(sessionStorage.getItem("tokenSession"));
  const [fileContent, setFileContent] = useState('');
  
  const [showSpinner, setShowSpinner] = useState(false);

  //gestione dello spinner
  const setToShoSpinner = (value) => {
  setShowSpinner(value)
  } 

   /* useEffect(() => {
        if (window.sessionStorage.getItem('userLogged')) {
            setUserLogged(true);
        }
    }, []);*/

  // useEffect(() => {
  // if(token){ // se il token esiste allora...
  //   // Esegui una richiesta HTTP per ottenere il contenuto del file dal server NGINX
  //   axios.get('/config/appConfig.js') // non avendo BE non abbiamo file di configurazione esterno appConfig.js
  //     .then(response => {
  //       setFileContent(JSON.parse(response.data.replace(/[\n';]|\s{2}/g, ''))); //ripulisce Json da spazi e punteggiature
  //       sessionStorage.setItem("appConfig", response.data.replace(/[\n';]|\s{2}/g, '')); //salva
  //     })
  //     .catch(error => {
  //       console.error('Errore durante il recupero del contenuto del file:', error); //gestione errore
  //     });
  // }
  // }, []); 

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleLogout= () => {
        sessionStorage.removeItem("userLogged", false);
         sessionStorage.removeItem("userName",'');
          window.location.reload();
    };

  return (
      <BrowserRouter>
        <div className="Container">
          <div className="HeaderBar">
            <div className="LeftHeaderBar" style={{'justify-content': 'flex-start'}}>
                <Link to="/" className="App-header">
                  {t("E-Commerce training")}
                </Link>
            </div>
            <div className="RightHeaderBar" style={{'justify-content': 'flex-end'}}>
             <div className="Flags"  style={{marginLeft: '50px'}, {float: 'right'}} >
                              <img
                                src={itFlag}
                                alt="Italiano"
                                className="flag-icon"
                                onClick={() => handleChangeLanguage('it')}
                              />
                              <img
                                src={ukFlag}
                                alt="English"
                                className="flag-icon"
                                onClick={() => handleChangeLanguage('en')}
                              />

                         </div>
                {!userLogged && (<div className="buttons"  style={{marginLeft: '10px'} , {float: 'right'}} >
                    <Link to="/login">
                        <Button style={{marginLeft: ' 10px'} } >Login</Button>
                    </Link>

                     <Link to="/registration">
                        <Button style={{marginLeft: '10px'} }   >Registrati</Button>
                    </Link>

                </div>)}

                 {userLogged && (<div className="buttonLogout"  style={{marginLeft: '10px'} , {float: 'right'}} >
                                    <Link to="/">
                                        <Button style={{marginLeft: ' 10px'} }  onClick={() =>handleLogout()}>Logout</Button>
                                    </Link>


                                </div>)}

             </div>
            </div>


          {showSpinner && <div className="spinner"></div>}
            <div className="Main">

             {userLogged &&
                <Sidebar setToShoSpinner={setToShoSpinner}   />
            }
             <div className="Content">
              <RouterComponent setToShoSpinner={setToShoSpinner}  callBack={setUserLogged}/>
            </div>

          </div>
        </div>
      </BrowserRouter>
  );

}

export default App;

