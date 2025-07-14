import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
import GrigliaProva1 from "../components/agGrid/grigliaProva1";
import StatusToast from "../components/statusMessage";
import { useState } from "react";
import ModalNote from "../components/modal/modal_Pag1";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// https://react-bootstrap.netlify.app/docs/layout/grid/
// https://react-bootstrap.netlify.app/docs/getting-started/introduction/

function Registration({setToShoSpinner}) {
  console.log("Registrazione")
  
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


         <Container fluid="md">
            <Row>
                <Col xs="12">
                    <h2 style={{marginLeft:"20px"}}>{t("Registrati")}</h2>
                </Col>
              </Row>
               <Row>
                                  <br/>
                                </Row>
                                 <Row>
                                                    <br/>
                                                  </Row>
              <Row>
                <Col xs="12"> <p style={{marginLeft:"20px"}}>{t("Inserisci i dati necessari per la registrazione")}</p></Col>
              </Row>
              <Row>
               <Col xs="3">
                    <label> Nome*</label>
                </Col>
                 <Col xs="3">
                    <input name="inpNome" />
               </Col>
                <Col xs="3">
                    <label> Cognome*</label>
                 </Col>
                 <Col xs="3">
                    <input name= "inpCognome"/>
                 </Col>
              </Row>
                <Row>
                    <Col xs="3">
                        <label> Email*</label>
                     </Col>
                     <Col xs="9">
                        <input name= "inpEmail"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <label> Codice Fiscale</label>
                    </Col>
                   <Col xs="3">
                        <input name= "inpCF"/>
                    </Col>
                    <Col xs="3">
                         <label> Partita Iva</label>
                      </Col>
                     <Col xs="3">
                         <input name= "inpPIva"/>
                    </Col>
                </Row>
                 <Row>
                    <br/>
                  </Row>
                <Row>
                    <Col>
                        <Button onClick={showSuccess}>Success</Button>
                        <Button onClick={showFailure}>Failure</Button>
                    </Col>
                    <Col>
                      <Button style={{marginLeft: '410px'}} onClick={() => handlePopUp()}>PopUp</Button>
                    </Col>
                </Row>
            </Container>










      </div>


    </>

  );
}

export default Registration;
