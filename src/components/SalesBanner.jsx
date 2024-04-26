import React from 'react';
import { Container } from 'react-bootstrap';
import Furniture from '../assets/images/furniture.png';

const SalesBanner = () => {
  return (
    <section className='bg-light p-3'    
    style={{
        backgroundImage: `url('https://thumbs.dreamstime.com/b/abstract-orange-painting-grey-wall-stylish-living-room-interior-white-wooden-furniture-couch-140315142.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    }}>
     <Container>
        <div className="row">
            <div className='col-md-6'><img src={Furniture} alt="furniture" className='img-fluid' style={{width: '90%'}} /></div>
            <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
                <h3>Furniture Name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, non.</p>
                <button className="btn btn-outline-primary text-white">Shop Now</button>
            </div>
        </div>
     </Container>
    </section>
  )
}

export default SalesBanner
