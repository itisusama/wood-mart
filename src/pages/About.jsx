import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <>
     <BreadCrumb pageName='About Us'/> 
     {/* Our Blog */}
      <Container>
        <h3>Read Our Blogs</h3>
        <div className='mt-3'>
          <img src="https://via.placeholder.com/200" alt="Placeholder Image" className="img-fluid"/>
        
        </div>
      </Container>
     {/* Our Blog */}
    </>
  )
}

export default About
