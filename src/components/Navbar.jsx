import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Mart (2).png'

const Navbar = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
    };

    const handleCloseClick = () => {
        setIsNavbarVisible(false);
    };
    return (
        <>
            <div className="logo-container">
                <img src={Logo} alt="Wood Mart Logo" className="logo-image" />
                <h4 className="logo text-center">Wood Mart</h4>
            </div>
            <a href="#" id='nav-toggle' onClick={toggleNavVisibility}><FaBars className='bars' /></a>

            <div className='container-fluid nav-container custom-select'>
                <section className='py-1 px-0 p-2 bg-transparent'>


                    <div className='desktop-navbar-item'>
                        <ul className='list-unstyled d-flex gap-2 align-items-center'>
                            <Link to="/" className='linkStyle'>Home</Link>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" className='dropdown-toggle-custom custom-select' id="dropdown-basic">
                                        Living Room
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item> <Link to="/sofa-sets" className='linkStyle'>Sofa Sets</Link> </Dropdown.Item>
                                        <Dropdown.Item><Link to="/corner-sofas" className='linkStyle'>Corner Sofas</Link></Dropdown.Item>
                                        <Dropdown.Item> <Link to="/sofas" className='linkStyle'>Sofas</Link> </Dropdown.Item>

                                        <Dropdown.Item> <Link to="/arm-chairs" className='linkStyle'>Armchairs</Link> </Dropdown.Item>

                                        <Dropdown.Item> <Link to="/living-room" className='linkStyle'>Living Room Sets</Link> </Dropdown.Item>

                                        <Dropdown.Item> <Link to="/shop-all-sofas" className='linkStyle'>Shop All Sofas</Link> </Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" className='dropdown-toggle-custom custom-select' id="dropdown-basic">
                                        Dining Room
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item><Link to="/dining-sets" className='linkStyle'>Dining Sets</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>TV Units</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/single-blog" className='linkStyle'>Shop All Dining Tables</Link></Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <Link to="/about" className='linkStyleLink ml-3'>Ottoman Beds</Link>

                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" className='dropdown-toggle-custom custom-select' id="dropdown-basic">
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
                                    <Dropdown.Toggle variant="none" className='dropdown-toggle-custom custom-select' id="dropdown-basic">
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
                {/* <a href="#" id='nav-toggle' onClick={toggleNavVisibility}><FaBars className='bars' /></a> */}
            </div>

            {/* Mobile Navbar */}
            <div className={`container-fluid mobile-navbar ${isNavbarVisible ? '' : 'hidden'}`} style={{ display: isNavVisible ? 'block' : 'none' }}>
                <nav>
                    {/* Close */}
                    <div className="close-btn" onClick={handleCloseClick}>X</div>
                    {/* Close */}
                    <div>
                        <ul className='list-unstyled'>
                            <li>Home</li>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                                        Living Room
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item><Link to="/sofa-sets" className='linkStyle'>Sofa Sets</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to="/corner-sofas" className='linkStyle'>Corner Sofas</Link></Dropdown.Item>
                                        <Dropdown.Item> <Link to="/sofas" className='linkStyle'>Sofas</Link> </Dropdown.Item>

                                        <Dropdown.Item> <Link to="/arm-chairs" className='linkStyle'>Armchairs</Link> </Dropdown.Item>

                                        <Dropdown.Item> <Link to="/living-room" className='linkStyle'>Living Room Sets</Link> </Dropdown.Item>

                                        <Dropdown.Item> <Link to="/shop-all-sofas" className='linkStyle'>Shop All Sofas</Link> </Dropdown.Item>
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