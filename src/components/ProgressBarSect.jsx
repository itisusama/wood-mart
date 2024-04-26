import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ReactProgressBar from "./ReactProgressBar";

function ProgressBarSect() {
  return (

      <Container style={{height:"100vh"}}>
        <Row className="pt-5 " style={{}}>
          <Col lg={6} md={6} xs={12} >
            <div className="title">
              <h3>Lorem.</h3>
              <h2 style={{ fontWeight: "bold", fontSize : "35px" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </h2>
            </div>
            
          </Col>
        </Row>
        <ReactProgressBar/>
      </Container>
  );
}

export default ProgressBarSect;