import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BreadCrumb from '../components/BreadCrumb';
import AllProduct1 from '../assets/images/ap1.jpg'
import Newsletter from '../components/Newsletter';
import { CiStar } from "react-icons/ci";

const SingleProduct = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <BreadCrumb pageName='Single Product' />
      <Container className='my-4'>
        <Row>
            <Col md={6}>
                <Row>
                    <Col md={2}>
                      <img className='mt-2' style={{width:'100px', height:'100px'}} src={AllProduct1} alt="1" />
                      <img className='mt-2' style={{width:'100px', height:'100px'}} src={AllProduct1} alt="1" />
                      <img className='mt-2' style={{width:'100px', height:'100px'}} src={AllProduct1} alt="1" />
                      <img className='mt-2' style={{width:'100px', height:'100px'}} src={AllProduct1} alt="1" />
                    </Col>
                    <Col md={10}>
                      <img  style={{width:'100%', height:'100%'}} src={AllProduct1} alt="1" />  
                    </Col>
                </Row>
            </Col>
            <Col md={6} className='mt-2'>
              <h2 className='font-1'><strong>Product Name</strong></h2>
              <small>$30.00</small>
              <div className="stars">
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <small>( 3 Customer reviews)</small>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <aside class="col-md-6">
                      <h5 className='font-1'><strong>Features</strong></h5>
                      <ul class="list-check">
                          <li>Lorem ipsum dolor sit amet.</li>
                          <li>Lorem ipsum dolor sit amet.</li>
                          <li>Lorem ipsum dolor sit amet.</li>
                          <li>Lorem ipsum dolor sit amet.</li>
                          <li>Lorem ipsum dolor sit amet.</li>
                      </ul>
                  </aside>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              <div className="counter">
                <button onClick={handleDecrement} style={{border:'none', outline:'none', backgroundColor:'transparent'}} className='border'>-</button>
                <input
                  type="number"
                  name="counterNumber"
                  id="counterNumber"
                  style={{ width: '10%', border:'none', textAlign:'center'}}
                  value={count}
                  readOnly
                  className='border'
                />
                <button onClick={handleIncrement} style={{border:'none', outline:'none', backgroundColor:'transparent'}} className='border'>+</button>
                <button className='btn btn-primary' style={{marginLeft:'50px'}}>Add to Cart</button>
              </div>
              <p className='font-1'> 
                <small><b>SKU:</b> 0347</small><br />
                <small><b>CATEGORY:</b> Style</small><br />
                <small><b>TAGS:</b> Decore, House</small>
              </p>
            </Col>
        </Row>
      </Container>
      <Newsletter/>
    </>
  )
}

export default SingleProduct