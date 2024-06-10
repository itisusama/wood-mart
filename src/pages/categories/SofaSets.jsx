import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from '../../components/BreadCrumb';

const sofaSets = [
  {
    name: "Rosa Sofa Set",
    oldPrice: "£4,965.00 GBP",
    newPrice: "£2,495.00 GBP",
    imageUrl: "https://placehold.co/300x200",
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

const SofaSets = () => {
  return (
    <>
      <BreadCrumb pageName='All Products' />
      <div className="container my-5">
        <h1 className="mb-4">Sofa Sets</h1>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <span className="mr-2">Filter:</span>
            <select className="mr-2">
              <option>Availability</option>
            </select>
            <select>
              <option>Price</option>
            </select>
          </div>
          <div>
            <span className="mr-2">Sort by:</span>
            <select className="mr-2">
              <option>Date, new to old</option>
            </select>
            <span>10 products</span>
          </div>
        </div>
        <div className="row">
          {sofaSets.map((sofa, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card">
                <img src={sofa.imageUrl} className="card-img-top" alt={sofa.name} />
                <div className="card-body">
                  <h5 className="card-title">{sofa.name}</h5>
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

export default SofaSets;
