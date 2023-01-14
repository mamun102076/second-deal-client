import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';
import RatioBar from '../RatioBar/RatioBar';

const Home = () => {
    const {data = []} = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertise')
            const data = res.json()
            return data
        } 
    })
    console.log(data)
    
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            {data?.length ? <AdvertisedItems></AdvertisedItems> : null}
            <RatioBar></RatioBar>
        </div>
    );
};

export default Home;