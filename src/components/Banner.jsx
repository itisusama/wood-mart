import React from 'react';

const BannerSection = ({heading, paragraph, btnText}) => {
    return (
        <div
            className="container-fluid text-center text-white"
            style={{
                backgroundImage: `url('https://thumbs.dreamstime.com/b/abstract-orange-painting-grey-wall-stylish-living-room-interior-white-wooden-furniture-couch-140315142.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="container">
                <h1>{heading}</h1>
                <p>{paragraph}</p>
                <button className="btn btn-primary">{btnText}</button>
            </div>
        </div>

    );
};

export default BannerSection;