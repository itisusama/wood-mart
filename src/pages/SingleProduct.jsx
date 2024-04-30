import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BreadCrumb from '../components/BreadCrumb'

const SingleProduct = () => {
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
  )
}

export default SingleProduct
