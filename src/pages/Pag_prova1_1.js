import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
import GrigliaProva1 from "../components/agGrid/grigliaProva1";
import StatusToast from "../components/statusMessage";
import { useState } from "react";

function Pag_prova1_1({setToShoSpinner}) {
  console.log("prova pagina")
  
  //serve per la traduzione
  const { t, i18n } = useTranslation();
  const location = useLocation();
  
  // Stato Success / failure: tipo + messaggio
  const [status, setStatus] = useState({ type: null, message: null });

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

  return (
    <>
      <div>
        <h2 style={{marginLeft:"20px"}}>{t("Prova 1.1")}</h2>
        <p style={{marginLeft:"20px"}}>{t("Contenuto di Prova 1.1")}</p>
      </div>

      <div>
        <GrigliaProva1 />
      </div>

      <div style={{margileft: '20px'}}>
        <button onClick={showSuccess}>Success</button>
        <button onClick={showFailure}>Failure</button>      
      </div>

      <StatusToast
        type={status.type}
        message={status.message}
        onClose={() => setStatus({ type: null, message: null })}
      />
    </>

  );
}

export default Pag_prova1_1;
