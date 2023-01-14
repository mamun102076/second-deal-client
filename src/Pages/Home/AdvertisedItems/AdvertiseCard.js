import React, { useState } from 'react';
import AdvertiseModal from './AdvertiseModal';

const AdvertiseCard = ({ advertise }) => {
    console.log(advertise)
    const { _id, image, productName, location, resalePrice, originalPrice, condtition, date, sellerName, phone, categoryName, usedYear, description } = advertise
    const [card,setCard] = useState([])
    return (
        <div className="card bg-base-100 shadow-xl m-6">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title mb-3">{productName}</h2>
                <p><span className='font-bold'>Location:</span> {location}</p>
                <p><span className='font-bold'>Original Price:</span> {originalPrice}$</p>
                <p><span className='font-bold'>Resale Price:</span> {resalePrice}$</p>
                <p><span className='font-bold'>Condtition:</span> {condtition}</p>
                <p><span className='font-bold'>Category:</span> {categoryName}</p>
                <p><span className='font-bold'>Seller Name:</span> {sellerName}</p>
                <p><span className='font-bold'>Seller Number:</span> {phone}</p>
                <p><span className='font-bold'>Product used for:</span> {usedYear} Years</p>
                <p><span className='font-bold'>Description:</span> {description}</p>
                <p><span className='font-bold'>Date:</span> {date}</p>
                <div className="card-actions justify-center">
                    <label onClick={() => setCard(advertise)} htmlFor={`${_id}`} className="btn btn-primary mt-6">Book Now</label>
                </div>
            </div>
            {
                card && <AdvertiseModal key={card._id} card={card} setCard={setCard}></AdvertiseModal>
            }
        </div>
    );
};

export default AdvertiseCard;