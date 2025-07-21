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
import wrapperRestApi from "../wrapper/restApiWrapper";
/*import prod1 from '../../src/images/prod1.jpg'
import prod2 from '../src/images/prod2.jpg'
import prod3 from '../src/images/prod3.jpg'
*/
function Result({setToShoSpinner} ) {
  
  //serve per la traduzione
  const { t, i18n } = useTranslation();
  const res = useState(JSON.parse(sessionStorage.getItem("res")));

  const [subCategory,setSubCategory] =useState(sessionStorage.getItem("subCate"));

    let productList=[];

  const location = useLocation();
  
    const handleDelete= (num) => {
        alert("cancellato il prodotto "+ num);
    }

      const handleCart= async (num) => {
            alert("aggiunto il prodotto "+ num + "al carrello");
        }

      res[0].map( (element ) => {

        productList.push(   <Row>
                                <Col xs="1"> {element.productId} </Col>
                                <Col xs="2"> {element.description} </Col>
                                <Col xs="4"> {element.LongDescription} </Col>
                                <Col xs="1"> {element.price} </Col>
                                <Col xs="2">  <img  src={require('../images/' + element.image + '.jpg')}  class="img-thumbnail"/>  </Col>
                                <Col xs="1"> <Button onClick={() => handleCart(element.subCategory) }> <Cart size={20} color="green" /></Button></Col>
                            </Row>
                        );
        }
      );





  // Nascondi lo spinner appena questa pagina viene montata
  useEffect(() => {
    setToShoSpinner(false);
  }, [location]);


         return  (<div>
                    <Container fluid="md">

                             <Row>
                                 <Col xs="1"> <h1>ID </h1></Col>
                                 <Col xs="2"> <h1>Desc. </h1> </Col>
                                 <Col xs="4"> <h1>Dettagli </h1> </Col>

                                 <Col xs="1"> <h1>Prezzo </h1></Col>
                                 <Col xs="2"> <h1>Foto</h1>  </Col>
                                 <Col xs="1"> <h1>-</h1> </Col>
                             </Row>
                     {productList}


         </Container>

    </div>
 );
}





export default Result;