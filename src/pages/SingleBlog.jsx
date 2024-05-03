import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Container } from 'react-bootstrap'

const SingleBlog = () => {
  return (
    <>
      <BreadCrumb pageName='Single Blog'/>

      <Container className='my-4'>
        <div className='mx-auto'>
          <img src="https://via.placeholder.com/1200x250" alt="blog-banner" />
        </div>
      </Container>
    </>
  )
}

export default SingleBlog
