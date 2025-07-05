import { Routes, Route } from 'react-router-dom';
import mareImage from '../images/mare.jpg';

import Pag_prova1_1 from '../pages/Pag_prova1_1';
import Pag_prova1_2 from '../pages/Pag_prova1_2'; 
import Pag_prova2_1 from '../pages/Pag_prova2_1';
import Pag_prova2_2 from '../pages/Pag_prova2_2';
import Pag_prova3_1 from '../pages/Pag_prova3_1';
import Pag_prova3_2 from '../pages/Pag_prova3_2';



function RouterComponent({setToShoSpinner}) {
  return (
    <Routes>
      <Route path="/prova1.1" element={<Pag_prova1_1 setToShoSpinner={setToShoSpinner}/>} />
      <Route path="/prova1.2" element={<Pag_prova1_2 setToShoSpinner={setToShoSpinner}/>} />
      <Route path="/prova2.1" element={<Pag_prova2_1 setToShoSpinner={setToShoSpinner}/>} />
      <Route path="/prova2.2" element={<Pag_prova2_2 setToShoSpinner={setToShoSpinner}/>} />
      <Route path="/prova3.1" element={<Pag_prova3_1 setToShoSpinner={setToShoSpinner}/>} />
      <Route path="/prova3.2" element={<Pag_prova3_2 setToShoSpinner={setToShoSpinner}/>} />

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
