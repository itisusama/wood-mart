import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { Container } from 'react-bootstrap';
import SalesBanner from '../components/SalesBanner';
import imgOne from '../assets/images/img6.jpg';
import Newsletter from '../components/Newsletter';

const About = () => {

  // Define an array of blog objects
  const blogs = [
    {
      date: '26 April 2024 - Friday',
      title: 'Blog Title 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, laudantium.',
      imageUrl: 'https://via.placeholder.com/350x500',
    },
    {
      date: '26 April 2024 - Friday',
      title: 'Blog Title 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, laudantium.',
      imageUrl: 'https://via.placeholder.com/350x500',
    },
    {
      date: '26 April 2024 - Friday',
      title: 'Blog Title 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, laudantium.',
      imageUrl: 'https://via.placeholder.com/350x500',
    },
  ];

  return (
    <>
      <BreadCrumb pageName='About Us'/> 
      {/* Our Blog */}
      <Container className='mt-4'>
        <h3 className='text-center'>Read Our Blogs</h3>
        <section className='d-flex justify-content-around'>
          {/* Map through the blogs array */}
          {blogs.map((blog, index) => (
            <div className='mt-3' key={index}>
              <img src={blog.imageUrl} alt="Placeholder Image" className="img-fluid"/>
              <div>
                <h4 className='mt-3'>{blog.date}</h4>
                <h3>{blog.title}</h3>
                <p style={{width:'300px'}} className='text-justify'>{blog.content}<br /> <a href="#">Read More</a></p>
              </div>
            </div>
          ))} 
        </section>
      </Container>
      {/* Our Blog */}
      <Container className='my-3'>
        <div className="row">
            <div className='col-md-6'>
              <img src={imgOne} alt="one" className='img-fluid rounded' style={{width:'90%'}}/>
            </div>
            <div className='col-md-6'>
              <h1>Heading goes here</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab modi, obcaecati facilis asperiores, dolore sint pariatur veritatis dolor nam doloribus culpa eius quo voluptatibus cumque quae possimus doloremque illo officia ratione eligendi, unde odio! Similique nisi provident commodi, quam beatae sunt optio excepturi doloribus reprehenderit molestiae, hic explicabo deleniti. Id quos illum officiis tempora a accusantium nihil sed ab asperiores impedit, aspernatur magni. Corrupti necessitatibus dolores quod ad sint sunt maxime nulla nisi natus, perspiciatis facere sequi tempore impedit distinctio!</p>
            </div>
        </div>
      </Container>
      <SalesBanner/>
      <Newsletter/>
    </>
  )
}

export default About;