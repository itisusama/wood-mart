import React from 'react';
import Logo from '../assets/images/Mart (2).png';
import { Helmet } from "react-helmet";

const NewNavbar = () => {
  return (
    <>
      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      </Helmet>
      <div className="logo d-flex flex-column justify-content-center align-items-center logo-container">
        <img src={Logo} alt="logo" className="logo-image" />
        <h3>Wood Mart</h3>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" aria-label="Tenth navbar example">
        <div className="container-fluid">
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Living Room</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/sofa-sets">Sofa Sets</a></li>
                  <li><a className="dropdown-item" href="/corner-sofas">Corner Sofas</a></li>
                  <li><a className="dropdown-item" href="/sofas">Sofas</a></li>
                  <li><a className="dropdown-item" href="/arm-chairs">Armchairs</a></li>
                  <li><a className="dropdown-item" href="/living-room">Living Room</a></li>
                  <li><a className="dropdown-item" href="/shop-all-sofas">Shop All Sofas</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dining Room</a>
                <ul className="dropdown-menu">

                <li><a className="dropdown-item" href="/dining-sets">Dining Sets</a></li>
                  <li><a className="dropdown-item" href="/tv-units">TV Units</a></li>
                  <li><a className="dropdown-item" href="/shop-all-dining-tables">Shop All Dining Tables</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ottoman-beds">Ottomon Beds</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Bedroom</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/bedroom-sets">Bedroom Sets</a></li>
                  <li><a className="dropdown-item" href="/young-room-sets">Young Room Sets</a></li>
                  <li><a className="dropdown-item" href="/shop-all-beds">Shop All Beds</a></li>
                  <li><a className="dropdown-item" href="/bed-set">Bed Set</a></li>

                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Accessories</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/coffee-tables">Coffee Tables</a></li>
                  <li><a className="dropdown-item" href="/nesting-tables">Nesting Tables</a></li>
                  <li><a className="dropdown-item" href="/tv-unit-accessories">TV Units</a></li>
                  <li><a className="dropdown-item" href="/shop-all-accessories">Shop All Accessories</a></li>

                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/special-offers">Special Offers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sofas">Sofas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/mattresses">Mattresses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/display-offers">Display Offers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NewNavbar
