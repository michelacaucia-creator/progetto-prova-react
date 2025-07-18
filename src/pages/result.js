import React , { useState ,useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Trash } from 'react-bootstrap-icons';
import { Cart } from 'react-bootstrap-icons';
import { PencilSquare } from 'react-bootstrap-icons';
/*import prod1 from '../../src/images/prod1.jpg'
import prod2 from '../src/images/prod2.jpg'
import prod3 from '../src/images/prod3.jpg'
*/
function Result({setToShoSpinner} ) {
  
  //serve per la traduzione
  const { t, i18n } = useTranslation();

  const [subCategory,setSubCategory] =useState(sessionStorage.getItem("subCate"));

  const location = useLocation();
  
    const handleDelete= (num) => {
        alert("cancellato il prodotto "+ num);
    }

      const handleCart= (num) => {
            alert("aggiunto il prodotto "+ num + "al carrello");
        }
  // Nascondi lo spinner appena questa pagina viene montata
  useEffect(() => {
    setToShoSpinner(false);
  }, [location]);


  return (
    <div>
      <h2 style={{marginLeft:"20px"}}>{t("Prodotti della categoria : " ) +  subCategory}  </h2>
         <Container fluid="md">
            <Row>
                <Col xs="1"> <h1>ID </h1></Col>
                <Col xs="2"> <h1>Desc. </h1> </Col>
                <Col xs="4"> <h1>Dettagli </h1> </Col>

                <Col xs="1"> <h1>Prezzo </h1></Col>
                <Col xs="2"> <h1>Foto</h1>  </Col>
                <Col xs="1"> <h1>-</h1> </Col>
            </Row>
            <Row>
                <Col xs="1"> 1 </Col>
                <Col xs="2"> <h3>Prodotto 1</h3></Col>
                <Col xs="4"> Descrizione lunga ...  </Col>
                <Col xs="1"> 13.50 </Col>

                <Col xs="2">  <img  src={require('../images/prod1.jpg')}   className="img-thumbnail" />  </Col>
               {/* <Col xs="1"> <Button onClick={() => handleDelete(1) }> <Trash size={20} color="red" />  </Button></Col>*/}
                <Col xs="1"> <Button onClick={() => handleCart(1) }> <Cart size={20} color="green" />  </Button></Col>
            </Row>
            <Row>
                <Col xs="1"> 2 </Col>
                <Col xs="2"> <h3>Prodotto 2</h3> </Col>
                <Col xs="4"> Descrizione lunga lunga lunga  </Col>
                <Col xs="1"> 15.50 </Col>

                <Col xs="2"> <img  src={require('../images/prod2.jpg')}  class="img-thumbnail"/> </Col>
                <Col xs="1"> <Button onClick={() => handleCart(2) }> <Cart size={20} color="green" />  </Button></Col>
            </Row>
            <Row>
                <Col xs="1"> 3 </Col>
                <Col xs="2"> <h3>Prodotto 3</h3></Col>
                <Col xs="4"> Descrizione lunga lunga lunga ma proprio lunga </Col>
                <Col xs="1"> 11.50 </Col>

                <Col xs="2"> <img  src={require('../images/prod3.jpg')} class="img-thumbnail" /> </Col>
                 <Col xs="1"> <Button onClick={() => handleCart(3) }> <Cart size={20} color="green" />  </Button></Col>
            </Row>
         </Container>

    </div>
  );
}

export default Result;