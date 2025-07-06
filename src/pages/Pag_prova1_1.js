import { useEffect } from "react";
import { useTranslation } from 'react-i18next';


function Pag_prova1_1({setToShoSpinner}) {
  console.log("prova pagina")
  
  //serve per la traduzione
  const { t, i18n } = useTranslation();
  

  // Nascondi lo spinner appena questa pagina viene montata
  useEffect(() => {
    const timer = setTimeout(() => {
      setToShoSpinner(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2 style={{marginLeft:"20px"}}>{t("Prova 1.1")}</h2>
      <p style={{marginLeft:"20px"}}>{t("Contenuto di Prova 1.1")}</p>
    </div>
  );
}

export default Pag_prova1_1;
