import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import BreadCrumb from '../components/BreadCrumb';
import ProductCards from '../components/ProductCards';
import Newsletter from '../components/Newsletter';



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
    { id: 5, name: 'Product 5', subname: 'Description 5', price: '$249', image: 'https://via.placeholder.com/250x300' },
    { id: 6, name: 'Product 6', subname: 'Description 6', price: '$249', image: 'https://via.placeholder.com/250x300' },
    { id: 7, name: 'Product 7', subname: 'Description 7', price: '$249', image: 'https://via.placeholder.com/250x300' },
    { id: 8, name: 'Product 8', subname: 'Description 8', price: '$249', image: 'https://via.placeholder.com/250x300' },

];

  return (
    <>
      <BreadCrumb pageName='All Products' />

      <Container className="my-5">

        <h2 className="text-center mb-4 font-1"><strong>All Products</strong></h2>
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

        <ProductCards/>
      </Container>
      <Newsletter/>
    </>
  );
}

export default AllProductsSection;