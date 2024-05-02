import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const DualImageDisplay = () => {
  return (
    <Container>
      <Row className='mt-5'>
        <Col lg={6} data-aos='fade-right'>
          <div className="content">
            <h3 className='font-2'>Colors</h3>
            <h2 className="heading text-uppercase fw-normal font-1" style={{ fontSize: '50px' }}>SHADES OF <br /> <span className="fw-bold">ELEGANCE</span></h2>
            <p className='fs-4'>Lorem ipsum dolor sit amet, consectetur ad is cing elit, semdo eiusmod tempor est.
            </p>
            <Button className='mb-4'>Click Me</Button>
          </div>
        </Col>
        <Col lg={6} data-aos='fade-left'>
          <Row>
            <Col>
              <div className="image-container mb-3 mb-md-0">
                <img
                  src="https://via.placeholder.com/300x400"
                  alt="Placeholder Image 1"
                  className="floating-image1"
                />
              </div>
            </Col>

            <Col>
              <div className="image-container d-none d-md-block">
                <img
                  src="https://via.placeholder.com/250x300"
                  alt="Placeholder Image 1"
                  className="floating-image2 img2"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DualImageDisplay;