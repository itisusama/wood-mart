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
                                        Shop
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Link to="/allproducts">
                                            <Dropdown.Item>All Products</Dropdown.Item>
                                        </Link>
                                        <Link to="/single-products">
                                            <Dropdown.Item>Single Products</Dropdown.Item>
                                        </Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" className='text-white' id="dropdown-basic">
                                        Blog
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">All Blogs</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Single Blog</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <Link to="/about" className='linkStyle'>About</Link>
                            <Link to="/contact" className='linkStyle'>Contact</Link>
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
                                        Shop
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
                                        Blog
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">All Blogs</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Single Blog</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <Link to="/about" className='linkStyle'>About</Link>
                            <Link to="/contact" className='linkStyle'>Contact</Link>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* Mobile Navbar */}
        </>
    )
}

export default Navbar;