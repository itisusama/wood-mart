import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import AllProduct1 from '../assets/images/ap1.jpg'
import AllProduct2 from '../assets/images/ap2.jpg'
import AllProduct3 from '../assets/images/ap3.jpg'
import AllProduct4 from '../assets/images/ap4.jpg'
import AllProduct5 from '../assets/images/ap5.jpg'
import AllProduct6 from '../assets/images/ap6.jpg'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCards = () => {
  const services = [
    {
      title: 'Vintage Chair',
      imageSrc: AllProduct1,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing...',
      price: '100$'
    },
    {
        title: 'Home Light',
        imageSrc: AllProduct2,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing...',
        price: '100$'
      },
      {
        title: 'Echinocactus',
        imageSrc: AllProduct3,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing...',
        price: '100$'
      },
      {
        title: 'Evergreen',
        imageSrc: AllProduct4,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing...',
        price: '100$'
      },
      {
        title: 'Sideboard',
        imageSrc: AllProduct5,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing...',
        price: '100$'
      },
      {
        title: 'Floor lamp',
        imageSrc: AllProduct6,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing...',
        price: '100$'
      },
    
    
  ];

  // Slick settings for responsive carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards on screen above 780px
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3, // Show 3 cards below 780px
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2, // Show 2 cards below 576px
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 card below 480px
        }
      }
    ]
  };

  return (
    <section className="mt-4 mb-5">
      <div className="title pt-3 d-flex justify-content-center mb-3">
        <h2 className="position-relative ms-4 font-1"><strong>Our Products</strong></h2>
      </div>
      <div className="container">
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque animi quae vel doloribus magni adipisci explicabo, placeat quos quisquam a rerum alias totam suscipit ab consequatur possimus eius temporibus rem vero nisi tempore magnam voluptates? Dicta, earum.</p>
      </div>

      <Slider {...settings} className='container'>
        {services.map((service, index) => (
          <div className="item" key={index}>
            <div className="card m-3">
              <Link to={service.route}><img className="card-img-top img-fluid" src={service.imageSrc} alt="Card image" style={{width: "100%"}} /></Link>
              <div className="card-body">
                <h5 className="card-title text-uppercase font-1">{service.title}</h5>
                <p className="card-text">
                  <small>{service.description}</small> <br/>
                  <Link to='/singleproduct' className='text-red' style={{color:'#e0b354 '}}>Read More</Link> <br />
                  <span style={{float:'right'}}><b>{service.price}</b></span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductCards;