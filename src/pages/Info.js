import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Galleria from '../pages/galleria'




function Info({setToShoSpinner}) {
  
  //serve per la traduzione
  const { t, i18n } = useTranslation();
  // serve per informazioni su URL
  const location = useLocation();

  // Nascondi lo spinner appena questa pagina viene montata
  useEffect(() => {
    setToShoSpinner(false);
  }, [location]);


  return (
      <Container fluid="md" className="cont">
        <h1 className="display-6">La nostra forza sono i nostri principi</h1>
        <Row>
          <Col><i className="bi bi-buildings"></i> La nostra Azienda</Col>
          <Col><i className="bi bi-file-bar-graph"></i> Dati aziendali</Col>
          <Col><i className="bi bi-diagram-2"></i> Organigramma</Col>
          <Col><i className="bi bi-people"></i> I nostri clienti</Col>
          <Col><i className="bi bi-person-lines-fill"></i> Contatti</Col>
        </Row>
        <Row>
          <Link to="/galleria"><i className="bi bi-images"></i> Galleria</Link>
        </Row>
      </Container>     

  );
}

export default Info;