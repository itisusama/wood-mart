import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { Container } from 'react-bootstrap';
import BannerSection from '../components/Banner';

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
      <BannerSection heading="something heading goes here" paragraph="Something paragraph goes here"/>
    </>
  )
}

export default About;