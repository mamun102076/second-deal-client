import { useLoaderData } from 'react-router-dom';
import CategoryDetailCard from './CategoryDetailCard';

const CategoryDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center bg-pink-200 py-2'>
                {
                    data.map(category => <CategoryDetailCard key={category._id} category={category}>

                    </CategoryDetailCard>)
                }
            </div>
        </div>
    );
};

export default CategoryDetails;