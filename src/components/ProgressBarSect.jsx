import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ReactProgressBar from "./ReactProgressBar";

function ProgressBarSect() {
  return (

    <Container>
      <Row className="pt-2">
        <Col lg={6} md={6} xs={12} >
          <div className="title text-uppercase fw-normal">
            <h3 className="font-2">Process</h3>
            <h2 className='font-1'>
              Driven by our own<br/>original set of values          
              </h2>
          </div>

        </Col>
      </Row>
      <ReactProgressBar />
    </Container>
  );
}

export default ProgressBarSect;