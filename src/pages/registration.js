import React, { useEffect,useState } from "react";
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
import StatusToast from "../components/statusMessage";
import ModalNote from "../components/modal/modal_Pag1";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// https://react-bootstrap.netlify.app/docs/layout/grid/
// https://react-bootstrap.netlify.app/docs/getting-started/introduction/

import wrapperRestApi from "../wrapper/restApiWrapper";

function Registration ({setToShoSpinner})  {
   console.log("Registrazione");
  
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
 const insertUser =  async (token,requestBody) => {

        try {
            const nextId = await wrapperRestApi('/api/get/general/getNextUserId', 'GET', null, token);
            requestBody.userId= nextId[0];
            const res =  await wrapperRestApi('/api/post/general/insertuser', 'POST', requestBody, token);
             console.log("valore da servizio:", res)
           // this.props.setToShoSpinner(false);
            if(res){
              alert (res);
            }
        } catch (error) {
            //this.setState({isUnderConstruction : true})
            let errorString = [];
            alert (error);
            errorString.push(error.message);
           // this.props.setToShoSpinner(false);
           // this.props.setStringForError(errorString);
           // this.props.showModalError();
        }
    };
    const [nameInVal, setNameInVal] = useState('');
    const [surnameInVal, setSurnameInVal] = useState('');
     const [emailInVal, setEmailInVal] = useState('');
      const [fiscalInVal, setFiscalInVal] = useState('');
       const [pivaInVal, setPivaInVal] = useState('');

    const handleChangeName =(event) =>{
        setNameInVal(event.target.value);
    }

    const handleChangeSurname =(event) =>{
        setSurnameInVal(event.target.value);
    }
    const handleChangeEmail =(event) =>{
        setEmailInVal(event.target.value);
    }
    const handleChangeFiscal =(event) =>{
        setFiscalInVal(event.target.value);
    }
    const handleChangePiva =(event) =>{
        setPivaInVal(event.target.value);
    }

  const handleRegistra = () => {
        let requestBody = {
             userId:7,
             name:nameInVal,
             surname:surnameInVal,
             email:emailInVal,
             fiscalCode:fiscalInVal,
             pIva:pivaInVal
            }
        insertUser( "" , requestBody);
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
                    <input name="inpNome" value={nameInVal} onChange={handleChangeName}/>
               </Col>
                <Col xs="3">
                    <label> Cognome*</label>
                 </Col>
                 <Col xs="3">
                    <input name= "inpCognome" value={surnameInVal} onChange={handleChangeSurname}/>
                 </Col>
              </Row>
                <Row>
                    <Col xs="3">
                        <label> Email*</label>
                     </Col>
                     <Col xs="9">
                        <input name= "inpEmail" value={emailInVal} onChange={handleChangeEmail}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <label> Codice Fiscale</label>
                    </Col>
                   <Col xs="3">
                        <input name= "inpCF" value={fiscalInVal} onChange={handleChangeFiscal}/>
                    </Col>
                    <Col xs="3">
                         <label> Partita Iva</label>
                      </Col>
                     <Col xs="3">
                         <input name= "inpPIva" value={pivaInVal} onChange={handleChangePiva}/>
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
                      <Button style={{marginLeft: '410px'}} onClick={() => handleRegistra()}>Registra</Button>
                    </Col>
                </Row>
            </Container>










      </div>


    </>

  );
}

export default Registration;
