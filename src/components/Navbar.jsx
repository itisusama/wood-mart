import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
  return (
    <>
      {/* START::Navbar */}
      <nav className="navbar navbar-expand-md bg-light fixed-top footer">
        <div className="container">
          <Link to="/" className='linkStyle nav-brand'><b>Wood Mart</b></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start" tabIndex="1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Wood Mart</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/" className='linkStyle nav-link active text-white' aria-current="page">Home</Link>
                </li>
                <li className="nav-item dropdown">
                <Dropdown>
                                    <Dropdown.Toggle variant="none" className='text-white' id="dropdown-basic">
                                        Shop
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item> <Link to="/allproducts" className='linkStyle'>All Products</Link> </Dropdown.Item>
                                        <Dropdown.Item><Link to="/singleproduct" className='linkStyle'>Single Product</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                </li>

                <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" className='text-white' id="dropdown-basic">
                                        Blog
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item><Link to="/blog" className='linkStyle'>All Blogs</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>Single Blog</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" to='/about'>About</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" to='/contact'>Contact</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" to='/faq'>Faq</Link>
                </li>

              </ul>
              <form className="d-flex mt-3" role="search">
                <button className="btn btn-primary" type="submit">Book Now</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      {/* END::Navbar */}
    </>
  )
}

export default Navbar
