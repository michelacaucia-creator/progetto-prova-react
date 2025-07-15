import React, { useEffect,useState } from "react";
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Login({setToShoSpinner}) {

  //serve per la traduzione
  const { t, i18n } = useTranslation();


  const location = useLocation();
  

  // Nascondi lo spinner appena questa pagina viene montata
  useEffect(() => {
    setToShoSpinner(false);
  }, [location]);

     const [emailInVal, setEmailInVal] = useState('');
      const [passInVal, setPassInVal] = useState('');

   const handleChangeEmail =(event) =>{
        setEmailInVal(event.target.value);
    }
    const handleChangePass =(event) =>{
        setPassInVal(event.target.value);
    }
  const handleLogin = () => {
        let requestBody = {
             email:emailInVal,
             password: passInVal
            }
        checkLogin( "" , requestBody);
    };

    const checkLogin =(token, requestBody) => {
        alert ("login:" + requestBody.email + " password:" + requestBody.password );
    }


  return (
     <Container fluid="md">
       <Row>
           <Col xs="12">
               <h2 style={{marginLeft:"20px"}}>{t("Effettua il login")}</h2>
           </Col>
       </Row>
        <Row>
            <br/>
        </Row>
        <Row>
            <br/>
        </Row>
        <Row>
            <Col xs="12">
                <p style={{marginLeft:"20px"}}>{t("Inserisci i dati necessari per l'accesso'")}
                </p>
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
                <label> Password</label>
            </Col>
            <Col xs="9">
                <input name= "inpPass" value={passInVal} onChange={handleChangePass}/>
            </Col>
        </Row>
        <Row>
           <br/>
         </Row>
        <Row>
            <Col>
                <Link to="/" className="App-header">
                    <Button style={{marginLeft: '410px'}} onClick={() => handleLogin()}>Login</Button>
                </Link>
            </Col>
        </Row>
     </Container>

  );
}

export default Login;