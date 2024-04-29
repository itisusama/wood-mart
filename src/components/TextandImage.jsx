import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const SectionWithImage = () => {
    return (
        <section className="container py-5">
            <div className="row align-items-center">
                <div className="col-md-6" data-aos='fade-right'>
                    <div className="text-left">
                        <h2>New</h2>
                        <h2 className="heading text-uppercase fw-normal" style={{ fontSize: '50px' }}>GENIUNELY FRESH <br /> <span className="fw-bold">WAY OF THINKING</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magnta liquia. Utenimadm inim veniam, quis nostrud exercitation ullamco la borisnisi ut aliquipex ea com modo conseqat. Duis aute irure dolorinre prehe nderit voluptate velit esse.</p>
                        <button className="btn btn-primary">DISCOVER</button>
                    </div>
                </div>
                <div className="col-md-6" data-aos='fade-left'>
                    <img
                        src="https://via.placeholder.com/500"
                        alt="Placeholder Image"
                        className="img-fluid"
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionWithImage;