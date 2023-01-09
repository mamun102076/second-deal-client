import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='mx-16 my-6'>
            <div>
                <h1 className='text-3xl text-center'>Payment for <span className='font-bold'>{data.productName}</span> at <span className='font-bold'>{data.price}$</span></h1>
            </div>
            <div className='w-96 mt-10 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm data={data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;