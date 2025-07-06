import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";

function Pag_prova2_1({setToShoSpinner}) {
  
  //serve per la traduzione
  const { t, i18n } = useTranslation();

  const location = useLocation();
  

  // Nascondi lo spinner appena questa pagina viene montata
  useEffect(() => {
    setToShoSpinner(false);
  }, [location]);


  return (
    <div>
      <h2 style={{marginLeft:"20px"}}>{t("Prova 2.1")}</h2>
      <p style={{marginLeft:"20px"}}>{t("Contenuto di Prova 2.1")}</p>
    </div>
  );
}

export default Pag_prova2_1;