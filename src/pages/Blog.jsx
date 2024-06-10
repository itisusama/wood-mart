import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Blog1 from '../assets/images/blog1.jpg'
import Right from '../components/Right';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Generating an array of length 6 to represent 6 cards
  const cardArray = Array.from({ length: 6 }, (v, i) => i);

  return (
   <>
   <BreadCrumb title="All Blog" /> 
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
                  <Link to='/single-blog'><img className="card-img-top img-fluid" src={Blog1} alt="Card image" style={{ width: '100%' }} /></Link>
                  <div className="card-body">
                    <h5 className="card-title font-1"><strong>Title Goes Here</strong></h5>
                    <div className="d-flex gap-2">
                      <span className="d-block font-1"><small><i className="fa-solid fa-eye"></i><strong>Reads</strong></small></span>
                      <span className="d-block font-1"><small><i className="fa-solid fa-comment text-red"></i><strong>Comments</strong></small></span>
                    </div>
                    <p className="card-text small">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis recusandae sint similique!...
                      <div className="pc-newsletter-btn">
                        <Link to='/single-blog' className='linkStyle btn btn-primary '> Read More </Link>
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
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Right Side */}
        <div className="col-lg-3 p-2">
          <Right/>
        </div>
      </div>
    </section>
    </>
  );
}

export default Blog;