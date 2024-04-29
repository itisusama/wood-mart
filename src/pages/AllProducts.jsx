import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import BreadCrumb from '../components/BreadCrumb';


const AllProductsSection = () => {
  // Sample data for products
  const products = [
    { id: 1, name: 'Sofa', price: '$499' },
    { id: 2, name: 'Bed', price: '$699' },
    { id: 3, name: 'Table', price: '$299' },
  ];

  const items = [
    { id: 1, name: 'Product 1', subname: 'Description 1', price: '$99', image: 'https://via.placeholder.com/250x300' },
    { id: 2, name: 'Product 2', subname: 'Description 2', price: '$149', image: 'https://via.placeholder.com/250x300' },
    { id: 3, name: 'Product 3', subname: 'Description 3', price: '$199', image: 'https://via.placeholder.com/250x300' },
    { id: 4, name: 'Product 4', subname: 'Description 4', price: '$249', image: 'https://via.placeholder.com/250x300' },
    { id: 4, name: 'Product 5', subname: 'Description 5', price: '$249', image: 'https://via.placeholder.com/250x300' },
    { id: 4, name: 'Product 6', subname: 'Description 6', price: '$249', image: 'https://via.placeholder.com/250x300' },
    { id: 4, name: 'Product 7', subname: 'Description 7', price: '$249', image: 'https://via.placeholder.com/250x300' },
    { id: 4, name: 'Product 8', subname: 'Description 8', price: '$249', image: 'https://via.placeholder.com/250x300' },

];

  return (
    <>
      <BreadCrumb pageName='All Products' />

      <Container className="my-5">

        <h2 className="text-center mb-4">All Products</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map(product => (
            <Col key={product.id}>
              <Card>
                <Card.Img variant="top" src={`https://via.placeholder.com/300x200?text=${product.name}`} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price: {product.price}</Card.Text>
                  <a href={`/product/${product.id}`} className="btn btn-primary">View Details</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Carousel interval={3000} indicators={false} controls={false} pause={false} wrap={true} slide={true}>
            {[...Array(Math.ceil(items.length / 4))].map((_, index) => (
                <Carousel.Item key={index}>
                    <div className="d-flex justify-content-around align-items-center gap-2 mt-5">
                        {items.slice(index * 4, index * 4 + 4).map(item => (
                            <div key={item.id} className="text-center">
                                <img src={item.image} alt={item.name} style={{ width: '250px', height: '300px' }} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.subname}</p>
                                    <p>Price: {item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>

      </Container>
    </>
  );
}

export default AllProductsSection;