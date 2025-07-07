import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
import GrigliaProva1 from "../components/agGrid/grigliaProva1";

function Pag_prova1_1({setToShoSpinner}) {
  console.log("prova pagina")
  
  //serve per la traduzione
  const { t, i18n } = useTranslation();
  const location = useLocation();
  

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
    </>

  );
}

export default Pag_prova1_1;
