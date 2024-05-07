import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

const CarouselandImage = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-6">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid"
            src={img3}
            alt="Right column image"
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselandImage;