import { useEffect } from "react";

function Pag_prova1_2({setToShoSpinner}) {

  // Nascondi lo spinner appena questa pagina viene montata
  useEffect(() => {
    const timer = setTimeout(() => {
      setToShoSpinner(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2 style={{marginLeft:"20px"}}>Prova 1.2</h2>
      <p style={{marginLeft:"20px"}}>Contenuto di Prova 1.2</p>
    </div>
  );
}

export default Pag_prova1_2;