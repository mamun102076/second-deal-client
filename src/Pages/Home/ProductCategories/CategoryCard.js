import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { _id, category_name } = category
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-6">
            <div className="card-body">
                <p className='text-center text-3xl font-bold'>{category_name}</p>
                <div className="card-actions justify-center">
                    <Link to={`/category/${_id}`} className="btn btn-success btn-sm mt-6">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;