import React from 'react';
import imgOne from '../assets/images/man.jpg';

const SectionWithImage = () => {
    return (
        <section className="container py-5">
            <div className="row align-items-center">
                <div className="col-md-6 order-md-2" data-aos='fade-right'>
                    <div className="text-center text-md-left">
                        <h3 className='font-2'>New</h3>
                        <h2 className="heading text-uppercase fw-normal font-1" style={{ fontSize: '50px' }}>GENUINELY FRESH <br /> <span className="fw-bold">WAY OF THINKING</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magnta liquia. Utenimadm inim veniam, quis nostrud exercitation ullamco la borisnisi ut aliquipex ea com modo conseqat. Duis aute irure dolorinre prehe nderit voluptate velit esse.</p>
                        <button className="btn btn-primary mb-3">DISCOVER</button>
                    </div>
                </div>
                <div className="col-md-6 order-md-1" data-aos='fade-left'>
                    <img
                        src={imgOne}
                        alt="Placeholder Image"
                        className="img-fluid"
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionWithImage;