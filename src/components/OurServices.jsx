import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import iconOne from '../assets/images/icon-1.png';
import iconTwo from '../assets/images/icon-2.png';
import iconThree from '../assets/images/icon-3.png';
import iconFour from '../assets/images/icon-4.png';

const OurServices = () => {
  return (
    <>
      <section className='mt-3'>
      <h3 className='text-center'>Our Services</h3>
      <p className='text-center'>There are many variations of passages of Lorem Ipsum</p>
      <Container>
        <Row>
            <Col md={3} className='d-flex flex-column justify-content-center align-items-center p-3'>
                <img src={iconOne} alt="icone" />
                <h3>Furniture</h3>
                <p className='text-center'>There are many variations of passages of Lorem Ipsum available, but the</p>
                <button type='button' className='btn btn-primary'>Shop Now</button>
            </Col>
            <Col md={3} className='d-flex flex-column justify-content-center align-items-center p-3'>
                <img src={iconTwo} alt="icone" />
                <h3>Office</h3>
                <p className='text-center'>There are many variations of passages of Lorem Ipsum available, but the</p>
                <button type='button' className='btn btn-primary'>Shop Now</button>
            </Col>
            <Col md={3} className='d-flex flex-column justify-content-center align-items-center p-3'>
                <img src={iconThree} alt="icone" />
                <h3>Home</h3>
                <p className='text-center'>There are many variations of passages of Lorem Ipsum available, but the</p>
                <button type='button' className='btn btn-primary'>Shop Now</button>
            </Col>
            <Col md={3} className='d-flex flex-column justify-content-center align-items-center p-3'>
                <img src={iconFour} alt="icone" />
                <h3>Bedroom</h3>
                <p className='text-center'>There are many variations of passages of Lorem Ipsum available, but the</p>
                <button type='button' className='btn btn-primary'>Shop Now</button>
            </Col>
        </Row>
      </Container>
      </section>
    </>
  )
}

export default OurServices
