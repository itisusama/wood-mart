import React from 'react';

const BannerSection = () => {
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
                <h1>Welcome to My Website</h1>
                <p>Explore and discover amazing things.</p>
                <button className="btn btn-outline-secondary btn-square">DISCOVER</button>
            </div>
        </div>

    );
};

export default BannerSection;