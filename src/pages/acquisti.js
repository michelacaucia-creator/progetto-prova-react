

import { useLocation } from "react-router-dom";
import React, { useState ,useEffect} from 'react';
import './subMenu.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Result from '../pages/result';
import Button from 'react-bootstrap/Button';
import wrapperRestApi from "../wrapper/restApiWrapper";
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Acquisti(props) {
    const location = useLocation();
  //serve per la traduzione
  const { t, i18n } = useTranslation();
   // const [subCategory, setSubCategory] = useState(0);

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

    const [res, setRes] = useState('');



const handleSubCategory =async (subCateId) => {
      let requestBody = {
                subCat :subCateId
            };
    setRes(await wrapperRestApi('/api/get/product/getProducts', 'GET', requestBody, ''));
    //navigate('/result', {state: { res:{results}}});

};


  // Nascondi lo spinner appena questa pagina viene montata
  useEffect(() => {
    props.setToShoSpinner(false);
  }, [location]);


  return (
    <div>
      <h2 style={{marginLeft:"20px"}}>{t("Sezione acquisti")}</h2>
       <Container fluid="md">
           <Row>
                <Col xs="1" >
                    <Row>  Seleziona categoria: </Row>
                    <Row>  <div className="menu-container">

                                           <div className="menu-item">
                                             <div
                                               className={`menu-title ${isOpen2 ? 'open' : ''}`}
                                               onClick={() => setIsOpen2(!isOpen2)}
                                             >
                                               {t("Categoria1")}
                                               <span className="arrow">{isOpen2 ? '▲' : '▼'}</span>
                                             </div>

                                                  <div className={`submenu ${isOpen2 ? 'open' : ''}`} >
                                               <Link to="/acquisti" className="submenu-link"  onClick={() => handleSubCategory(1)}  >
                                                    {t("sottocategoria1")}
                                               </Link>
                                               <Link to="/acquisti" className="submenu-link" onClick={() => handleSubCategory(2)}>
                                                 {t("sottocategoria2")}
                                               </Link>
                                             </div>

                                           </div>

                                           <div className="menu-item">
                                             <div
                                               className={`menu-title ${isOpen3 ? 'open' : ''}`}
                                               onClick={() => setIsOpen3(!isOpen3)}
                                             >
                                               {t("Categoria2")}
                                               <span className="arrow">{isOpen3 ? '▲' : '▼'}</span>
                                             </div>

                                             <div className={`submenu ${isOpen3 ? 'open' : ''}`}>
                                               <Link to="/acquisti" className="submenu-link" onClick={() => handleSubCategory(3)}>
                                                 {t("sottocategoria 3")}
                                               </Link>
                                               <Link to="/acquisti" className="submenu-link" onClick={() => handleSubCategory(3)}>
                                                 {t("sottocategoria 4")}
                                               </Link>
                                             </div>

                                           </div>
                                         </div>

                    </Row>
                </Col>
                <Col xs ="11" >
                    <Result setToShoSpinner={props.setToShoSpinner}   res = {res}/>
                </Col>
           </Row>

      </Container>
    </div>
  );
}

export default Acquisti;