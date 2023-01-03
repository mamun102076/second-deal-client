import { useLoaderData } from 'react-router-dom';
import CategoryDetailCard from './CategoryDetailCard';

const CategoryDetails = () => {
    const data = useLoaderData()

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center bg-pink-200 py-16'>
            {
               data.single.map(category => <CategoryDetailCard key={category.id} category={category}></CategoryDetailCard>)
            }
        </div>
    );
};

export default CategoryDetails;