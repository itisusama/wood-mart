import React from 'react';
import Banner from '../assets/images/tech-banner.gif';

const headerStyle = {
  backgroundImage: `url(${Banner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  color: 'white',
  textAlign: 'center',
  paddingTop: '8rem',
  paddingBottom: '8rem',
  height:'50vh'
};

const BreadCrumb = ({pageName}) => {
  return (
    <>
     <div>
      {/* Banner Section */}
      <header style={headerStyle}>
        <h1>{ pageName }</h1>
      </header>                                                                                          
      </div>
    </>
  )
}

export default BreadCrumb