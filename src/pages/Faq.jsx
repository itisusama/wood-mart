import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllCollapseExample from '../components/AllCollapseExample';
import BreadCrumb from '../components/BreadCrumb';

const Faq = () => {
  return (
    <>
     <BreadCrumb pageName='Faq Page'/>
     <Container className='my-4'>
        <h2 className='text-center'>Frequently Asked Questions</h2>
        
        <Row>
            <Col md={6}>
                <AllCollapseExample/>
            </Col>
            <Col md={6}>
                <AllCollapseExample/>
            </Col>
        </Row>

        <Row className='mt-4'>
            <Col md={6}>
                <AllCollapseExample/>
            </Col>
            <Col md={6}>
                <AllCollapseExample/>
            </Col>
        </Row>

    </Container> 
    </>
  )
}

export default Faq
