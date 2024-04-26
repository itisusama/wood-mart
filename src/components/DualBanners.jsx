import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SectionWithBanners = () => {

    return (
        <div>
            {/* Section 5 */}
            <section className="container-fluid" style={{ marginTop: '8rem' }}>
                {/* Single Row */}
                <div className="row about-row text-center">
                    <div data-aos='flip-left' className="col-md-6 bg-secondary text-light p-4 font-monospace" style={{ height: '25rem' }}>
                        <h2>Our Mission</h2>
                        <p className="text-white">
                            We know the importance of  growth for your business projects. M Technologies knows how to tackle the hurdles.
                        </p>
                        <button className="btn btn-outline-light btn-square">SHOP NOW</button>
                    </div>
                    <div data-aos='flip-right' className="col-md-6 bg-dark text-light p-4 font-monospace">
                        <h2>Our Vision</h2>
                        <p className="text-white">
                            We believe in producing the best outcomes for our clients and guiding them to shape the best ideas.
                        </p>
                        <button className="btn btn-outline-light btn-square">READ MORE</button>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default SectionWithBanners;