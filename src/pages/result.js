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
function Result(props ) {
  
  //serve per la traduzione
  const { t, i18n } = useTranslation();
  const [res,setRes] = useState('')

  const getRes=  (async (subCat) => {
                         let requestBody = {
                             subCat :subCat
                         };
                   setRes(JSON.stringify(await wrapperRestApi('/api/get/product/getProducts', 'GET', requestBody, '')));
                   });

  //const [subCategory,setSubCategory] =useState(sessionStorage.getItem("subCate"));
    //const [subCategory,setSubCategory] =useState(subCatState);

    let productList=[];

    const handleCart= async (art,num) => {
        alert("aggiunto il prodotto "+ art + " della categoria " + num + " al carrello");
    }
    const location = useLocation();

      useEffect(() => {
        props.setToShoSpinner(false);
      }, [location]);

  
    const handleDelete= (num) => {
        alert("cancellato il prodotto "+ num);
    }


    getRes({props.subCatState});

    res[0].map( (element ) => {

        productList.push(   <Row>
                                <Col xs="1"> {element.productId} </Col>
                                <Col xs="2"> {element.description} </Col>
                                <Col xs="4"> {element.LongDescription} </Col>
                                <Col xs="1"> {element.price} </Col>
                                <Col xs="2">  <img  src={require('../images/' + element.image + '.jpg')}  className="img-thumbnail"/>  </Col>
                                <Col xs="1"> <Button onClick={() => handleCart(element.description,element.subCategory.subCategoryId + ' - '+ element.subCategory.description) }> <Cart size={20} color="green" /></Button></Col>
                            </Row>
                        );
        }
      );





         return  (<div>
                    <Container fluid="md">
                    <Row>
                        <Col xs="12" > Sottocategoria: {props.subCatState}</Col>
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