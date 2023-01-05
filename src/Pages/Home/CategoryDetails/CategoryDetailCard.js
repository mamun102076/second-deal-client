import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';

const CategoryDetailCard = ({ category }) => {
    const { url, name, location, resalePrice, originalPrice, usedFor, date, sellerName
    } = category
    const [card,setCard] = useState([])
    return (
        <div className="card bg-base-100 shadow-xl m-6 p-5">
            <figure><img src={url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Location: {location}</p>
                <p>Resale Price: {resalePrice}$</p>
                <p>Original Price: {originalPrice}$</p>
                <p>Product Used: {usedFor} Years</p>
                <p>Date: {date}</p>
                <p>Seller Name: {sellerName}</p>
                <div className="card-actions justify-center">
                    <label onClick={() => setCard(category)} htmlFor={`${name}`} className="btn btn-primary mt-6">Book Now</label>
                </div>
            </div>
            {
                card && <BookingModal card={card} setCard={setCard}></BookingModal>
            }
        </div>
    );
};

export default CategoryDetailCard;