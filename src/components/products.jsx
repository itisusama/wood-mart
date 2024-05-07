import React from 'react';
import imgOne from '../assets/images/bluevase.jpg';
import imgTwo from '../assets/images/chair.jpg';

const ProductCard = ({ imageSrc, title, price }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={imageSrc} className="card-img-top img-hover" alt={title} style={{height:"300px"}} />

            </div>
            <div className="card-body mt-3">
                <div className="d-flex justify-content-between align-items-center">
                    <h6 className="card-title mb-0 font-1">{title}</h6>
                    <p className="card-text mb-0">${price}</p>
                </div>
            </div>
        </div>
    );
};

const Products = () => {
    return (
        <div className="container mt-5">
            <h3 className="mb-4 text-center font-2">New</h3>
            <h2 className="mb-5 text-center font-1">OUR PRODUCTS ARE CUSTOM MADE</h2>
            <div className="row text-center">
                <ProductCard imageSrc= {imgOne} title="BLUE VASE" price="90" />
                <ProductCard imageSrc={imgTwo} title="WOODEN CHAIR" price="220" />
                <ProductCard imageSrc={imgOne} title="COFFEE TABLE" price="220" />
                <ProductCard imageSrc={imgTwo} title="ELEGANT ARMCHAIR" price="180" />
                <ProductCard imageSrc={imgOne} title="OLIV SOFA" price="650" />
                <ProductCard imageSrc={imgTwo} title="VELVET CHAIR" price="440" />
            </div>
        </div>
    );
};

export default Products;