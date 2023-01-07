import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllBuyers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers')
            const data = await res.json()
            return data
        }
    })

    const handleBuyerDelete = id => {
        fetch(`http://localhost:5000/buyers/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('buyer deleted successfull')
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
                    </tr>
                </thead>
                <tbody>
                    {
                        buyers.map((buyer, i) =>
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><button onClick={() => handleBuyerDelete(buyer._id)} className="btn btn-error btn-xs">Delete</button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyers;