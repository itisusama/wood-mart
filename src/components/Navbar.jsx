import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AllProducts from '../pages/AllProducts';

const Navbar = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
    };
    return (
        <>
            <div className='container-fluid nav-container mt-2'>
                <section className='py-1 p-2 bg-transparent'>
                    <div><h3 className='text-white logo'>Wood Mart</h3></div>

                    <div className='desktop-navbar-item'>
                        <ul className='list-unstyled d-flex gap-2 align-items-center'>
                            <Link to="/" className='linkStyle'><b>Home</b></Link>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" className='text-white' id="dropdown-basic">
                                        <strong>Shop</strong>
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
                                        <strong>Blog</strong>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">All Blogs</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Single Blog</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <Link to="/about" className='linkStyle'><strong>About</strong></Link>
                            <Link to="/contact" className='linkStyle'><strong>Contact</strong></Link>
                            <Link to="/faq" className='linkStyle'><strong>Faq</strong></Link>
                        </ul>
                    </div>

                    <div className='desktop-navbar-item'>
                        <button className='btn btn-primary px-4 rounded-pill'>Register</button>
                    </div>
                </section>
                <a href="#" id='nav-toggle' onClick={toggleNavVisibility}><FaBars className='bars' /></a>
            </div>

            {/* Mobile Navbar */}
            <div className='mobile-navbar container-fluid' style={{ display: isNavVisible ? 'block' : 'none' }}>
                <nav>
                    <div>
                        <ul className='list-unstyled'>
                            <li><b>Home</b></li>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                                        <strong>Shop</strong>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">All Products</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Single Products</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                                        <strong>Blog</strong>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">All Blogs</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Single Blog</Dropdown.Item>
                                    </Dropdown.Menu>

                                </Dropdown>
                            </li>
                            <li>
                                
                            </li>
                            <Link to="/about" className='linkStyle'><strong>About</strong></Link>
                            <br/>
                            <Link to="/contact" className='linkStyle'><strong>Contact</strong></Link>
                            <br/>
                            <Link to="/faq" className='linkStyle'><strong>Faq</strong></Link>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* Mobile Navbar */}
        </>
    )
}

export default Navbar;