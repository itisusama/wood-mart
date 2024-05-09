import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import img1 from '../assets/images/img1.jpg';

const Contact = () => {
  return (
    <>
      <BreadCrumb pageName='Contact Page' breadCrumbLink='/contact' />
      <div className="container mt-3">
            <div className="row">
                <div className="col-md-6">
                    <h4 className="mb-3 font-1"><strong>Contact Us</strong></h4>
                    <h4 className="mb-3 font-1" style={{ fontWeight: 'bold', fontSize: '1.5em' }}><strong>GOT ANY QUESTIONS?</strong></h4>
                    <p className="mb-4">
                        Please fill out the form below to send us a message. We'll get back to you as soon as possible.
                    </p>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h5 className='font-1'><strong>Office</strong></h5>
                            <p>1316 Abbot Kinney Blvd.</p>
                            <p>Copenhagen UK 90291</p>
                            <p>+112 345 6789</p>
                            <p>Woodworth@example.com</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <h5 className='font-1'><strong>Store</strong></h5>
                            <p>1316 Abbot Kinney Blvd.</p>
                            <p>Copenhagen CA 90291</p>
                            <p>+112 345 6789</p>
                            <p>Woodworth@example.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-3 mb-3">
                    <form>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="name" className="form-label"></label>
                                <input type="text" className="form-control" id="name" placeholder="Name" />
                            </div>
                            <div className="col">
                                <label htmlFor="email" className="form-label"></label>
                                <input type="email" className="form-control" id="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="comments" className="form-label"></label>
                            <textarea className="form-control" id="comments" rows="7" placeholder="Comments"></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </>
  )
}

export default Contact