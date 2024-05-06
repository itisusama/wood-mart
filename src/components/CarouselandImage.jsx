import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselandImage = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-6">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid"
            src="https://via.placeholder.com/800x400"
            alt="Right column image"
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselandImage;