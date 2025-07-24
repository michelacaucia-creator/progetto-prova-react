import { Routes, Route } from 'react-router-dom';
import mareImage from '../images/mare.jpg';
import React , { useState ,useEffect } from "react";
import Registration from '../pages/registration';
import Login from '../pages/Login';
import Acquisti from '../pages/acquisti';
import Result from '../pages/result';
import Pag_prova3_1 from '../pages/Pag_prova3_1';
import Pag_prova3_2 from '../pages/Pag_prova3_2';




function RouterComponent(props ) {


  return (
    <Routes>
      <Route path="/registration" element={<Registration setToShoSpinner={props.setToShoSpinner} subCatState={props.subCat}/>} />
      <Route path="/login" element={<Login setToShoSpinner={props.setToShoSpinner} subCatState={props.subCat} />} />
      <Route path="/acquisti" element={<Acquisti setToShoSpinner={props.setToShoSpinner} subCatState={props.subCat}  />} />
      <Route path="/result" element={<Result setToShoSpinner={props.setToShoSpinner}  subCatState={props.subCat}/>} />
      <Route path="/prova3.1" element={<Pag_prova3_1 setToShoSpinner={props.setToShoSpinner} subCatState={props.subCat}/>} />
      <Route path="/prova3.2" element={<Pag_prova3_2 setToShoSpinner={props.setToShoSpinner} subCatState={ props.subCat }/>} />

      <Route
        path="/"
        element={
          <>
            {/* Immagine presa dal web */}
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Mare azzurro"
              className="SeaImage"
            />

               {/* Immagine importata dal desktop */}
            {/* <img src={mareImage} alt="Mare azzurro" className="SeaImage" /> */}
          </>
        }
      />

    </Routes>
  );
}

export default RouterComponent;
