import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';
import CategoryDetailCard from './CategoryDetailCard';

const CategoryDetails = () => {
    const data = useLoaderData()
    const {data: products = []} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoryproducts')
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center bg-pink-200 py-2'>
                {
                    data.single.map(category => <CategoryDetailCard key={category._id} category={category}>

                    </CategoryDetailCard>)
                }
                {
                    products.map(category => <CategoryDetailCard category={category}></CategoryDetailCard>)
                }
            </div>
        </div>
    );
};

export default CategoryDetails;