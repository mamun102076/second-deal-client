import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import CategoryCard from './CategoryCard';

const ProductCategories = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://second-deal-server.vercel.app/category')
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='bg-green-100 py-16'>
            <h1 className='text-4xl text-center font-bold'>Product Categories</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-14 gap-5 mx-10'>
                {
                    categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;