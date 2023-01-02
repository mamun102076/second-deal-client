import React from 'react';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';
import RatioBar from '../RatioBar/RatioBar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <RatioBar></RatioBar>
        </div>
    );
};

export default Home;