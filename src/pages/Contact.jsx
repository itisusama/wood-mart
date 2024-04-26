import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import img1 from '../assets/images/img1.jpg';

const Contact = () => {
  return (
    <>
    <BreadCrumb pageName= 'Contact Page' breadCrumbLink='/contact'/>

    <Container className='mt-3'>
        <h2 className='text-center text-primary'>Heading Goes Here</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eum aliquid dolorem laboriosam iste, fuga blanditiis minima a voluptatem adipisci fugit eveniet ipsum expedita doloribus, quasi tenetur optio culpa vel eos, sunt perferendis cupiditate at explicabo? Sint repellat praesentium mollitia necessitatibus beatae repellendus inventore veritatis velit, laborum, unde temporibus corrupti!</p>
    </Container>
    
    <Container>
                <Row>
                    <Col md={4} className='border p-4 shadow-sm rounded'>
                        <h5 className='text-primary'>Corporate Office</h5>
                        <p>
                            702 Main St, West Columbia <br />
                            South Carolina, 29170 <br />
                            United States
                        </p>
                    </Col>
                    <Col md={4} className='border p-4 shadow-sm rounded'>
                        <h5 className='text-primary'>Get in Touch</h5>
                        <p>
                            <b>+44 1234 567758</b> <br />
                            person@company.com <br />
                            person@company.com
                        </p>
                    </Col>
                    <Col md={4} className='border p-4 shadow-sm rounded'>
                        <h5 className='text-primary'>Customer Support</h5>
                        <p>
                            <b>Mon to Sat:</b>  09:00am - 08:00pm <br />
                            <b>Sunday:</b>  10:00am - 06:00pm
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container className="py-5">
                <Row>
                    <Col lg={6}>
                        <h2 data-aos='fade-right' className='text-primary'>Contact Us</h2>
                        <p data-aos='fade-right'>Have a question or want to get in touch? Fill out the form below:</p>
                        <Form data-aos='fade-right'>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='mt-3 btn btn-primary'>Submit</Button>
                        </Form>
                    </Col>
                    <Col lg={6} data-aos='fade-left' className="d-flex align-items-center justify-content-center mt-2">
                        <img src={img1} alt="Contact" className='rounded' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className='mt-5'>
                    <div className='row text-center justify-content-center' data-aos='fade-right'>
                        <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                            <div className="section-title">
                                <h2 className="sec-title">Our Location</h2>
                            </div>
                        </div>
                    </div>
                        <div style={{ width: '100%', height: '300px', border: '1px solid #ddd' }}>
                            <iframe
                                title="Google Map"
                                data-aos="flip-up"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-71.059773!3d42.360940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQ4JzU1LjEiTiA3McKwMjAnMTQuMyJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
    </>
  )
}

export default Contact
