import { useEffect } from "react";

function Pag_prova2_2({setToShoSpinner}) {

  // Nascondi lo spinner appena questa pagina viene montata
  useEffect(() => {
    const timer = setTimeout(() => {
      setToShoSpinner(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2 style={{marginLeft:"20px"}}>Prova 2.2</h2>
      <p style={{marginLeft:"20px"}}>Contenuto di Prova 2.2</p>
    </div>
  );
}

export default Pag_prova2_2;