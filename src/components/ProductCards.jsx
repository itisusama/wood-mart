import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCards = () => {
  const services = [
    {
      title: 'Product Name',
      imageSrc: 'https://via.placeholder.com/250x250',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing...',
      price: '100$'
    },
    {
        title: 'Product Name',
        imageSrc: 'https://via.placeholder.com/250x250',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing...',
        price: '100$'
      },
      {
        title: 'Product Name',
        imageSrc: 'https://via.placeholder.com/250x250',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing...',
        price: '100$'
      },
      {
        title: 'Product Name',
        imageSrc: 'https://via.placeholder.com/250x250',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing...',
        price: '100$'
      },
      {
        title: 'Product Name',
        imageSrc: 'https://via.placeholder.com/250x250',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing...',
        price: '100$'
      },
      {
        title: 'Product Name',
        imageSrc: 'https://via.placeholder.com/250x250',
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
        <h2 className="position-relative ms-4">Our Products</h2>
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
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">
                  <small>{service.description}</small> <Link to={service.route} className='text-red'>Read More</Link> <br />
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