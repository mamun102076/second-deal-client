import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyOrders = () => {

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/booking')
            const data = res.json()
            return data
        }
    })

    return (
        <div className="overflow-x-auto mx-10">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>email</th>
                        <th>price</th>
                        <th>productName</th>
                        <th>location</th>
                        <th>number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking,i) =>
                            <tr key={i}>
                                <th>{i+1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.price}$</td>
                                <td>{booking.productName}</td>
                                <td>{booking.location}</td>
                                <td>{booking.number}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;