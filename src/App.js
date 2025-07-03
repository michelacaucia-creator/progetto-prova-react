import './App.css';
import { useState } from 'react';
//import axios from 'axios';
import Sidebar from './components/sidebar';
import mareImage from './images/mare.jpg';  
import RouterComponent from './components/routerComponent';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


function App() {

  const [token, setToken] = useState(sessionStorage.getItem("tokenSession"));
  const [fileContent, setFileContent] = useState('');
  
  // useEffect(() => {
  // if(!token){ // se il token esiste allora...
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

  return (
    <BrowserRouter>
      <div className="Container">
        <Link to="/" className="App-header">
          Pagina App.js
        </Link>
        {/* <h1 className="App-header">Pagina App.js</h1> */}
        <div className="Main">
          <Sidebar />
          <div className='Content'>
            <RouterComponent />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

