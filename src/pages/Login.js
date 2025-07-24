import React, { useEffect,useState } from "react";
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import wrapperRestApi from "../wrapper/restApiWrapper";


function Login({setToShoSpinner}) {

  //serve per la traduzione
  const { t, i18n } = useTranslation();
  // serve per informazioni su URL
  const location = useLocation();
  // Nascondi lo spinner appena questa pagina viene montata
  useEffect(() => {
    setToShoSpinner(false);
  }, [location]);

 // uso HOOK useState memorizzare dati nello stato locale di un componente 
 const [emailInVal, setEmailInVal] = useState(''); 
 const [passInVal, setPassInVal] = useState('');

 //funzione che gestiscono scrittura campo email e password e intercettano l'evento
   const handleChangeEmail =(event) =>{
        setEmailInVal(event.target.value);
    }
    const handleChangePass =(event) =>{
        setPassInVal(event.target.value);
    }
  // funzione login e relativo check
  const handleLogin = () => {
        let requestBody = {
             userName:emailInVal,
             psw: passInVal
            }
        checkLogin( "" , requestBody);
    };
  // funzione di controllo login 
  const checkLogin =async (token, requestBody)     => {

        try {
            const res = await wrapperRestApi('/api/get/general/checkLogin', 'GET', requestBody, token);
            console.log("valore da servizio:", res)
           // this.props.setToShoSpinner(false);
            if(res){
               //setUserLoggedFunct(true);
               // setUserLogged(true);
                sessionStorage.setItem("userLogged", true);
                sessionStorage.setItem("userName", res[0].email);
                window.location.reload();
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



  return (
     <Container fluid="md">
       <Row>
           <Col xs="12">
                <h2 style={{marginLeft:"15px"}}>{t("Effettua il login")}</h2>
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
                <p style={{marginLeft:"15px"}}>{t("Inserisci i dati necessari per l'accesso")}</p>
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
                <input name= "inpPass" type="password" value={passInVal} onChange={handleChangePass}/>
            </Col>
        </Row>
        <Row>
           <br/>
         </Row>
        <Row>
            <Col>
                <Link to="/" className="App-header" refresh="true">
                    <Button style={{marginLeft: '410px'}} onClick={() => handleLogin()}>Login</Button>
                </Link>
            </Col>
        </Row>
     </Container>

  );
}

export default Login;