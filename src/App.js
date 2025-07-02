import './App.css';
import { useState } from 'react';
//import axios from 'axios';
import Sidebar from './components/sidebar';
import mareImage from './images/mare.jpg';  


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
    <div className="Container">
      <h1 className="App-header">Pagina App.js</h1>
      <div className="Main">
        <Sidebar />
        <div className="Content">
          {/* Immagine presa dal web: */}
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" 
            alt="Mare azzurro"
            className="SeaImage"
          />

          {/* Immagine importata dal desktop  */}
          <img src={mareImage} alt="Mare azzurro" className="SeaImage" />

        </div>
      </div>
    </div>
  );
}

export default App;

