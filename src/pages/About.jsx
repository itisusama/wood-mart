import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { Container } from 'react-bootstrap';
import BannerSection from '../components/Banner';
import About4 from '../assets/images/wood1.webp';
import About1 from '../assets/images/about1.jpg'
import About2 from '../assets/images/about2.jpg'
import About3 from '../assets/images/about3.jpg'
import Newsletter from '../components/Newsletter';
import CustomerTestimonials from '../components/CustomerTestimonials';

const About = () => {

  // Define an array of blog objects
  const blogs = [
    {
      date: '26 April 2024 - Friday',
      title: 'Blog Title 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, laudantium.',
      imageUrl: About1,
    },
    {
      date: '26 April 2024 - Friday',
      title: 'Blog Title 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, laudantium.',
      imageUrl: About2,
    },
    {
      date: '26 April 2024 - Friday',
      title: 'Blog Title 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, laudantium.',
      imageUrl: About3,
    },
  ];

  return (
    <>
      <BreadCrumb pageName='About Us' />
      {/* Our Blog */}
      <Container className='mt-4'>
        <h3 className='text-center font-1'>Read Our Blogs</h3>
        <section className='row justify-content-center'>
          {/* Map through the blogs array */}
          {blogs.map((blog, index) => (
            <div className='col-12 col-md-6 col-lg-4 mt-3' key={index}>
              <img src={blog.imageUrl} alt="Placeholder Image" className="img-fluid" />
              <div className="mt-3">
                <h4 className='font-1'>{blog.date}</h4>
                <h3 className='font-1'>{blog.title}</h3>
                <p className='text-justify'>{blog.content}</p>
                <button type='button' className='btn btn-primary mt-2'>Read More</button>
              </div>
            </div>
          ))}
        </section>
      </Container>

      {/* Our Blog */}
      <Container className='my-3 mt-5'>
        <div className="row">
          <div className='col-md-6'>
            <img src={About4} alt="one" className='img-fluid rounded' style={{ width: '100%', height:'70%' }} />
          </div>
          <div className='col-md-6'>
            <h1 className='font-1'>Heading goes here</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab modi, obcaecati facilis asperiores, dolore sint pariatur veritatis dolor nam doloribus culpa eius quo voluptatibus cumque quae possimus doloremque illo officia ratione eligendi, unde odio! Similique nisi provident commodi, quam beatae sunt optio excepturi doloribus reprehenderit molestiae, hic explicabo deleniti. Id quos illum officiis tempora a accusantium nihil sed ab asperiores impedit, aspernatur magni. Corrupti necessitatibus dolores quod ad sint sunt maxime nulla nisi natus, perspiciatis facere sequi tempore impedit distinctio!</p>
          </div>
        </div>
      </Container>
      <BannerSection  heading="Welcome to Site Name" paragraph="Explore and discover amazing things." btnText="Discover" />
      <CustomerTestimonials />
      <Newsletter />
    </>
  )
}

export default About;