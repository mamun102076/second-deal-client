import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://second-deal-server.vercel.app/booking?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    const handleDeleteOrder = id => {
        fetch(`https://second-deal-server.vercel.app/booking/${id}`, {
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
        <div className="overflow-x-auto m-10">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>email</th>
                        <th>price</th>
                        <th>Delete</th>
                        <th>Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings?.map((booking, i) =>
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <th>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={booking.image} alt='' />
                                        </div>
                                    </div>
                                </th>
                                <td>{booking.productName}</td>
                                <td>{booking.email}</td>
                                <td>{booking.price}$</td>
                                <td>
                                    <button onClick={() => handleDeleteOrder(booking._id)} className="btn btn-error btn-xs text-white">Delete</button>
                                </td>
                                <td>
                                    {
                                        !booking.paid &&
                                        <Link to={`/dashboard/payment/${booking._id}`}><button className="btn btn-info btn-xs text-white">Pay</button></Link>
                                    }
                                    {
                                        booking.paid &&
                                        <span className='text-green-700 font-semibold'>Paid</span>
                                    }
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;