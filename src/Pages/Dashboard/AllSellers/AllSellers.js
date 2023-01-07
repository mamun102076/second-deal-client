import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/seller')
            const data = await res.json()
            return data
        }
    })

    const handleSellerDelete = id => {
        fetch(`http://localhost:5000/seller/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Seller deleted successfull')
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
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((seller, i) =>
                            <tr>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button onClick={() => handleSellerDelete(seller._id)} className="btn btn-error btn-xs">Delete</button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;