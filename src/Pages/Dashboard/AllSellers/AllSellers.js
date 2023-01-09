import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { CheckmarkIcon, toast } from 'react-hot-toast';

const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/seller',{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    const handleSellerDelete = id => {
        fetch(`http://localhost:5000/seller/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Seller deleted successfull')
                    refetch()
                }
            })
    }

    const handleSellerVerification = id => {
        console.log(id)
        fetch(`http://localhost:5000/seller/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
                toast.success('seller is now verified')
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
                        <th>Email</th>
                        <th>Delete</th>
                        <th>Verification</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers?.map((seller, i) =>
                            <tr>
                                <th>{i + 1}</th>
                                <td className='flex'>{seller.name}{seller?.verification &&<CheckmarkIcon className="h-6 w-6 text-blue-500"/>}</td>
                                <td>{seller.email}</td>
                                <td><button onClick={() => handleSellerDelete(seller._id)} className="btn btn-error btn-xs">Delete</button></td>
                                {
                                    !seller?.verification &&
                                    <td><button onClick={() => handleSellerVerification(seller?._id)} className="btn btn-error btn-xs">Unverified</button></td>
                                }
                                {
                                    seller?.verification &&
                                    <td><button onClick={() => handleSellerVerification(seller?._id)} className="btn btn-success btn-xs">verified</button></td>
                                }
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;