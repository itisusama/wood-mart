import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import img1 from '../assets/images/img1.jpg';

const Contact = () => {
  return (
    <>
      <BreadCrumb pageName='Contact Page' breadCrumbLink='/contact' />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h4 className="mb-3">Contact Us</h4>
            <h4 className="mb-3" style={{fontStyle:'fw-semibold ', fontSize:'30px'}}>GOT ANY QUESTIONS?</h4>
            <p className="mb-4">
              Please fill out the form below to send us a message. We'll get back to you as soon as possible.
            </p>
            <div className="row">
              <div className="col-6">
                <h5>Office</h5>
                <p>1316 Abbot Kinney Blvd.</p>
                <p>Copenhagen UK 90291</p>
                <p>+112 345 6789</p>
                <p>Woodworth@example.com</p>
              </div>
              <div className="col-6">
                <h5>Store</h5>
                <p>1316 Abbot Kinney Blvd.</p>
                <p>Copenhagen CA 90291</p>
                <p>+112 345 6789</p>
                <p>Woodworth@example.com</p>

              </div>
            </div>
          </div>
          <div className="col-6 mt-5 mb-5">
            <form>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="name" className="form-label"></label>
                  <input type="text" style={{fontStyle:'italic'}} className="form-control"  id="name" placeholder="Name" />
                </div>
                <div className="col">
                  <label htmlFor="email" className="form-label"></label>
                  <input type="email" style={{fontStyle:'italic'}} className="form-control" id="email" placeholder="Email" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="comments" className="form-label"></label>
                <textarea className="form-control" style={{fontStyle:'italic'}} id="comments" rows="7" placeholder="Comments" defaultValue={""}></textarea>
              </div>
              <div className="text-right">
                <button type="button" style={{ backgroundColor: '#80bfb3', outline: 'none' }} className="btn btn-primary ml-auto">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact