import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from '../../components/BreadCrumb';
import Sofa1 from '../../assets/images/dualone.jpg'

const sofaSets = [
  {
    name: "Rosa Sofa Set",
    oldPrice: "£4,965.00 GBP",
    newPrice: "£2,495.00 GBP",
    imageUrl: Sofa1 ,
    sale: true
  },
  {
    name: "Picasso Sofa Set",
    oldPrice: "£3,995.00 GBP",
    newPrice: "£1,995.00 GBP",
    imageUrl: "https://placehold.co/300x200",
    sale: true
  },
  {
    name: "Merisa Sofa Set (Chesterfield)",
    oldPrice: "£5,180.00 GBP",
    newPrice: "£2,590.00 GBP",
    imageUrl: "https://placehold.co/300x200",
    sale: true
  },
  {
    name: "Rolden Sofa Set",
    oldPrice: "£1,800.00 GBP",
    newPrice: "£900.00 GBP",
    imageUrl: "https://placehold.co/300x200",
    sale: true
  }
];

const YoungRoomSets = () => {
  return (
    <>
      <BreadCrumb pageName='Young Room Sets' />
      <div className="container my-5">
        <h1 className="mb-4 font-1">Young Room Sets</h1>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
          <div className="mb-3 mb-md-0">
            <span className="custom-select mr-2">Filter: </span>
            <select className="custom-select mr-2 mb-2 mb-md-0">
              <option className="option">Availability</option>
            </select>
            <select className="custom-select">
              <option>Price</option>
            </select>
          </div>
          <div className="d-flex align-items-center">
            <span className="custom-select mr-2">Sort by:</span>
            <select className="custom-select mr-2 mb-2 mb-md-0">
              <option>Date, new to old</option>
            </select>
            <span className='custom-select'>10 products</span>
          </div>
        </div>
        <div className="row">
          {sofaSets.map((sofa, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <div className="card h-100">
                <img src={sofa.imageUrl} className="card-img-top" alt={sofa.name} />
                <div className="card-body">
                  <h5 className="card-title font-1" style={{fontSize:'14px'}}>{sofa.name}</h5>
                  <p className="card-text">
                    <span className="text-muted text-decoration-line-through">{sofa.oldPrice}</span>
                    <br />
                    <span className="font-weight-bold">{sofa.newPrice}</span>
                  </p>
                  <button className="btn btn-outline-primary">Add to cart</button>
                  {sofa.sale && <span className="badge badge-warning ml-2">Sale</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default YoungRoomSets;
