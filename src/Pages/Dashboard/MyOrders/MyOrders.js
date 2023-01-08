import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    const handleDeleteOrder = id => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('order deleted successfull')
                    refetch()
                }
            })
    }

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
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings?.map((booking,i) =>
                            <tr key={i}>
                                <th>{i+1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.price}$</td>
                                <td>{booking.productName}</td>
                                <td>{booking.location}</td>
                                <td>{booking.number}</td>
                                <td><button onClick={() => handleDeleteOrder(booking._id)} className="btn btn-error btn-xs text-white">Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;