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
import { useNavigate } from 'react-router-dom';
/*import prod1 from '../../src/images/prod1.jpg'
import prod2 from '../src/images/prod2.jpg'
import prod3 from '../src/images/prod3.jpg'
*/
function Result(props ) {


  const location = useLocation();


  //serve per la traduzione
  const { t, i18n } = useTranslation();
  const [stato,setStato]=useState(false);

 const productList=[];


    const handleCart=  (art,num) => {
        alert("aggiunto il prodotto "+ art + " della categoria " + num + " al carrello");
    }


      useEffect(() => {
        props.setToShoSpinner(false);
        //getRes();
      }, [location]);

  
    const handleDelete= (num) => {
        alert("cancellato il prodotto "+ num);
    }

   const getRes=  ()=> {



        //const results =await wrapperRestApi('/api/get/product/getProducts', 'GET', requestBody, '');
        if (props.res ) {
           // alert("passa");

            //let res = (JSON.stringify(results));

             props.res.map( (element ) => {
                productList.push(   <Row>
                        <Col xs="1"> {element.productId} </Col>
                        <Col xs="2"> {element.description} </Col>
                        <Col xs="4"> {element.LongDescription} </Col>
                        <Col xs="1"> {element.price} </Col>
                        <Col xs="2">  <img  src={require('../images/' + element.image + '.jpg')}  className="img-thumbnail"/>  </Col>
                        <Col xs="1"> <Button onClick={() => handleCart(element.description,element.subCategory.subCategoryId + ' - '+ element.subCategory.description) }> <Cart size={20} color="green" /></Button></Col>
                    </Row>
                );
            });
            setStato(true);
            return productList;
        }

   }


   // getRes();




         return  (<div>
                    <Container fluid="md">
                    <Row>
                        <Col xs="12" > Sottocategoria: aaa</Col>
                     </Row>
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