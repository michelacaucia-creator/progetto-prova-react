import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
import GrigliaProva1 from "../components/agGrid/grigliaProva1";
import StatusToast from "../components/statusMessage";
import { useState } from "react";
import ModalNote from "../components/modal/modal_Pag1";

function Pag_prova1_1({setToShoSpinner}) {
  console.log("prova pagina")
  
  //serve per la traduzione
  const { t, i18n } = useTranslation();
  const location = useLocation();
  
  // Stato Success / failure: tipo + messaggio
  const [status, setStatus] = useState({ type: null, message: null });

  // stato per apertura popUp
  const [ isPopupOpen, setIsPopupOpen ] = useState(false)

  const showSuccess = () => {
    setStatus({ type: 'success', message: 'Operazione completata con successo!' });
  };

  const showFailure = () => {
    setStatus({ type: 'failure', message: 'Errore durante l\'operazione.' });
  };
  

  // Nascondi lo spinner appena questa pagina viene montata
  useEffect(() => {
    setToShoSpinner(false);
  }, [location]);


  //handle popUp 
  const handlePopUp = () => {
    setIsPopupOpen(true)
  }

  const handleClosePopUp = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <StatusToast
        type={status.type}
        message={status.message}
        onClose={() => setStatus({ type: null, message: null })}
      />

      {isPopupOpen &&
        <ModalNote 
        onClose={handleClosePopUp}
        />
      }

      <div>
        <h2 style={{marginLeft:"20px"}}>{t("Prova 1.1")}</h2>
        <p style={{marginLeft:"20px"}}>{t("Contenuto di Prova 1.1")}</p>
      </div>

      <div>
        <GrigliaProva1 />
      </div>

      <div style={{marginLeft: '20px'}}> 
          <button onClick={showSuccess}>Success</button>
          <button onClick={showFailure}>Failure</button>      

          <button style={{marginLeft: '410px'}} onClick={() => handlePopUp()}>PopUp</button>
      </div>


    </>

  );
}

export default Pag_prova1_1;
