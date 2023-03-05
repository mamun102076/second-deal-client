import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { category_name } = category
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mb-6">
                <div className="card-body">
                    <p className='text-center text-3xl font-bold'>{category_name}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/category/${category_name}`} className="btn btn-success btn-sm mt-6">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;