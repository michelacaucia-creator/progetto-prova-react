// src/components/Galleria.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/photo1.jpg';
import img2 from '../images/photo2.jpg';
import img3 from '../images/photo3.jpg';

function Galleria() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Galleria Fotografica</h2>
      
      <Carousel interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="Immagine 1"
            style={{height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3 className="text-end text-white fs-2">Sede</h3>
            <p className="text-end text-white fs-2">I nostri quattro edifici</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Immagine 2"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3 className="text-end text-white fs-2">I nostri Collaboratori</h3>
            <p className="text-end text-white fs-2">La nostra vera forza</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Immagine 3"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3 style={{textAlign:'right',color:'white'}}>Costruire il futuro</h3>
            <p className="text-end text-white fs-2">Lo facciamo insieme a te</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Galleria;
