import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import AllProducts from '../pages/AllProducts';
import SofaSets from '../pages/categories/SofaSets';

const Navbar = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
    };
    return (
        <>
            <div>
                <h3 className='logo text-center'>Wood Mart</h3>
            </div>
            <div className='container-fluid nav-container custom-select'>
                <section className='py-1 p-2 bg-transparent'>


                    <div className='desktop-navbar-item'>
                        <ul className='list-unstyled d-flex gap-2 align-items-center'>
                            <Link to="/" className='linkStyle'>Home</Link>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" className='text-white dropdown-toggle-custom custom-select' id="dropdown-basic">
                                        Living Room
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item> <Link to="/sofa-sets" className='linkStyle'>Sofa Sets</Link> </Dropdown.Item>
                                        <Dropdown.Item><Link to="/singleproduct" className='linkStyle'>Corner Sofas</Link></Dropdown.Item>
                                        <Dropdown.Item> <Link to="/allproducts" className='linkStyle'>Sofas</Link> </Dropdown.Item>

                                        <Dropdown.Item> <Link to="/allproducts" className='linkStyle'>Armchairs</Link> </Dropdown.Item>

                                        <Dropdown.Item> <Link to="/allproducts" className='linkStyle'>Living Room Sets</Link> </Dropdown.Item>

                                        <Dropdown.Item> <Link to="/allproducts" className='linkStyle'>Shop All Sofas</Link> </Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" className='text-white dropdown-toggle-custom custom-select' id="dropdown-basic">
                                        Dining Room
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item><Link to="/blog" className='linkStyle'>Dining Sets</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>TV Units</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>Shop All Dining Tables</Link></Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <Link to="/about" className='linkStyleLink ml-3'>Ottoman Beds</Link>

                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" className='text-white dropdown-toggle-custom custom-select' id="dropdown-basic">
                                        Bedroom
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item><Link to="/blog" className='linkStyle'>Bedroom Sets</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>Storage Beds</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>Young Room Sets</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>Shop All Beds</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>Bed Set</Link></Dropdown.Item>

                                    </Dropdown.Menu>

                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" className='text-white dropdown-toggle-custom custom-select' id="dropdown-basic">
                                        Accessories
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item><Link to="/blog" className='linkStyle'>Coffee Tables</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>Nesting Tables</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>TV Units</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>Shop All Accessories</Link></Dropdown.Item>
                                    </Dropdown.Menu>

                                </Dropdown>
                            </li>
                            <Link to="/about" className='linkStyleLink ml-3'>Special Offers</Link>


                            <Link to="/about" className='linkStyleLink ml-3'>Sofas</Link>
                            <Link to="/about" className='linkStyleLink ml-3'>Mattressses</Link>
                            <Link to="/about" className='linkStyleLink ml-3'>Dispaly Offers</Link>
                            <Link to="/contact" className='linkStyleLink ml-3'>Contact</Link>
                            {/* <Link to="/faq" className='linkStyle ml-3'>Faq</Link> */}

                        </ul>
                    </div>

                    {/* <div className='desktop-navbar-item'>
                        <button className='btn btn-primary px-4 rounded-pill'>Register</button>
                    </div> */}
                </section>
                <a href="#" id='nav-toggle' onClick={toggleNavVisibility}><FaBars className='bars' /></a>
            </div>

            {/* Mobile Navbar */}
            <div className='mobile-navbar container-fluid' style={{ display: isNavVisible ? 'block' : 'none' }}>
                <nav>
                    <div>
                        <ul className='list-unstyled'>
                            <li>Home</li>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                                        Living Room
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="allproducts">Sofa Sets</Dropdown.Item>
                                        <Dropdown.Item><Link to="/singleproduct" className='linkStyle'>Corner Sofas</Link></Dropdown.Item>
                                        <Dropdown.Item> <Link to="/allproducts" className='linkStyle'>Sofas</Link> </Dropdown.Item>

                                        <Dropdown.Item> <Link to="/allproducts" className='linkStyle'>Armchairs</Link> </Dropdown.Item>

                                        <Dropdown.Item> <Link to="/allproducts" className='linkStyle'>Living Room Sets</Link> </Dropdown.Item>

                                        <Dropdown.Item> <Link to="/allproducts" className='linkStyle'>Shop All Sofas</Link> </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                                        Dining Room
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item><Link to="/blog" className='linkStyle'>Dining Sets</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>TV Units</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>Shop All Dining Tables</Link></Dropdown.Item>

                                    </Dropdown.Menu>

                                </Dropdown>
                            </li>
                            <Link to="/about" className='linkStylemobile ml-3'>Ottoman Beds</Link>


                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                                        Bedroom
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item><Link to="/blog" className='linkStyle'>Bedroom Sets</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>Storage Beds</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>Young Room Sets</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>Shop All Beds</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>Bed Set</Link></Dropdown.Item>

                                    </Dropdown.Menu>

                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                                        Accessories
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item><Link to="/blog" className='linkStyle'>Coffee Tables</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>Nesting Tables</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>TV Units</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>Shop All Accessories</Link></Dropdown.Item>
                                    </Dropdown.Menu>

                                </Dropdown>
                            </li>

                            <Link to="/about" className='linkStylemobile ml-3'>Special Offers</Link>
  <br />
                            <Link to="/about" className='linkStylemobile'>Sofas</Link>
                            <br />
                            <Link to="/about" className='linkStylemobile'>Mattresses</Link>
                            <br />
                            <Link to="/about" className='linkStylemobile'>Display Offers</Link>
                            <br />
                            <Link to="/contact" className='linkStylemobile'>Contact</Link>

                        </ul>
                    </div>
                </nav>
            </div>
            {/* Mobile Navbar */}
        </>
    )
}

export default Navbar;