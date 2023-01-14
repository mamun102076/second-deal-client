import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const AdvertisedItems = () => {
    const { data: advertise = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('https://second-deal-server.vercel.app/advertise')
            const data = res.json()
            return data
        }
    })


    return (
        <div className='bg-green-300 p-8'>
            <h1 className='text-4xl font-semibold text-center mb-10 mt-5'>Advertised Items</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    advertise.map(advertise => <AdvertiseCard key={advertise._id} advertise={advertise}></AdvertiseCard>)
                }
            </div>
        </div>
    );
};

export default AdvertisedItems;