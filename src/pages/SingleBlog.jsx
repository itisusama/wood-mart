import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import BreadCrumb from '../components/BreadCrumb';
import { Container } from 'react-bootstrap';

const SingleBlog = () => {
  // Assuming cardArray is defined and populated somewhere
  const cardArray = [1, 2, 3]; // Dummy data for demonstration
  
  // Assuming Right component is defined somewhere
  const Right = () => <div>Right Component</div>;

  return (
    <>
      <BreadCrumb pageName='Single Blog' />

      <Container className='my-4'>
        <div className='mx-auto'>
          <img src="https://via.placeholder.com/1200x250" alt="blog-banner" />
        </div>
      </Container>

      <section className="pc-blogs mt-4 mb-4 container-xl">
        <div className="row">
          {/* Left Side */}
          <div className="col-lg-9">
            {/* START:: Blog Cards */}
            <div className="row">
              {/* Generating cards using map function */}
              {cardArray.map((index) => (
                <div key={index} className="col-md-4 p-2">
                  {/* card */}
                  <div className="card" data-aos="fade-up" data-aos-delay="1000">
                    <Link to='/single-blog'><img className="card-img-top img-fluid" src={`images/900x600/${index}.jpg`} alt="Card image" style={{ width: '100%' }} /></Link>
                    <div className="card-body">
                      <h5 className="card-title">Title Goes Here</h5>
                      <div className="d-flex gap-2">
                        <span className="d-block"><small><i className="fa-solid fa-eye text-red"></i> Reads</small></span>
                        <span className="d-block"><small><i className="fa-solid fa-comment text-red"></i> Comments</small></span>
                      </div>
                      <p className="card-text small">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis recusandae sint similique!...
                        <div className="pc-newsletter-btn">
                          <Link to='/single-blog' className='linkStyle btn'> Read More </Link>
                        </div>
                      </p>
                    </div>
                  </div>
                  {/* card */}
                </div>
              ))}
            </div>
            {/* END:: Blog Cards */}
            {/* Pagination */}
            <div className="container">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <button className="page-link" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                  <li className="page-item"><button className="page-link">1</button></li>
                  <li className="page-item"><button className="page-link">2</button></li>
                  <li className="page-item"><button className="page-link">3</button></li>
                  <li className="page-item">
                    <button className="page-link" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* Right Side */}
          <div className="col-lg-3 p-2">
            <Right />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
