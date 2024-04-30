import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Card } from 'react-bootstrap';
import BreadCrumb from '../components/BreadCrumb';


const SingleProduct = () => {

    const [quantity, setQuantity] = useState(1);
    const product = {
        name: 'Example Product',
        price: '$99.99',
        ratings: 4.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        color: 'Black',
        material: 'Wood',
        image: 'product-image.jpg',
    };

    const handleAddToCart = () => {
        // Add your logic for adding to cart here
    };

    const handleAddToWishlist = () => {
        // Add your logic for adding to wishlist here
    };

  
  return (
    <>
      <BreadCrumb pageName='Single Product' />

      <Container className='mt-4'>
        <Row>
            <Col md={6}>
                <Row>
                    <Col md={2}>
                      <img className='mt-2' src="https://via.placeholder.com/70x70" alt="1" />
                      <img className='mt-2' src="https://via.placeholder.com/70x70" alt="1" />
                      <img className='mt-2' src="https://via.placeholder.com/70x70" alt="1" />
                      <img className='mt-2' src="https://via.placeholder.com/70x70" alt="1" />
                    </Col>
                    <Col md={10}>
                      <img className='mt-2' src="https://via.placeholder.com/450x350" alt="1" />  
                    </Col>
                </Row>
            </Col>
            <Col md={6} className='mt-2'>
              <h2>Product Name</h2>
              <small>$30.00</small>
            </Col>
        </Row>
      </Container>
    </>
  );
}

export default SingleProduct;