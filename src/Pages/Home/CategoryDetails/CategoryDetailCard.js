import React from 'react';

const CategoryDetailCard = ({category}) => {
    const { url,name,location,resalePrice,originalPrice,usedFor,date,sellerName
    } = category
    return (
        <div className="card bg-base-100 shadow-xl m-6 p-5">
            <figure><img src={url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Location: {location}</p>
                <p>Resale Price: {resalePrice}$</p>
                <p>Original Price: {originalPrice}$</p>
                <p>Product Used: {usedFor}</p>
                <p>Date: {date}</p>
                <p>Seller Name: {sellerName}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary mt-6">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetailCard;