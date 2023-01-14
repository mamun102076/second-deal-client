import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ data }) => {
    const { userName, price, _id, email } = data
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [transcationId, setTranscationId] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements || !clientSecret) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        
        if (error) {
            console.log(error);
            setCardError(error.message)
        }
        setCardError('')
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
        }

        if (paymentIntent.status === "succeeded") {
            const payment = {
                userName: userName,
                price,
                transactionId: paymentIntent.id,
                bookingId: _id
            }
            fetch('http://localhost:5000/payment', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        setSuccess('Congratulation!! Your payment has successful')
                        setTranscationId(paymentIntent.id)
                    }
                })
        }

        console.log(paymentIntent);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-info btn-sm mt-5' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            <p className='text-red-600'>{cardError}</p>
            <div>
                {
                    success &&
                    <>
                        <p className='text-green-600 font-semibold'>{success}</p>
                        <p>Your transcationid is : <span className='font-bold'>{transcationId}</span></p>
                    </>
                }
            </div>
        </div>
    );
};

export default CheckoutForm;