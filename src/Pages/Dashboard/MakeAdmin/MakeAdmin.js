import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const MakeAdmin = () => {

    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/seller')
            const data = await res.json()
            return data
        }
    })

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers')
            const data = await res.json()
            return data
        }
    })

    const handleMakeAdmin = id => {
        console.log(id)
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
                toast.success('admin created successfully')
                refetch()
                console.log(data)
            }
        })
    }
    return (
        <div className='my-7'>
            <div>
                <h1 className='text-4xl font-semibold text-center mb-6'>All Sellers</h1>
                <div className="overflow-x-auto mx-10">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sellers.map((seller, i) =>
                                    <tr>
                                        <th>{i + 1}</th>
                                        <td>{seller.name}</td>
                                        <td>{seller.email}</td>
                                        <td>
                                        {
                                            !seller.role && <button onClick={ () => handleMakeAdmin(seller?._id)} className="btn btn-info btn-xs">Make Admin</button>
                                        }
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h1 className='text-4xl font-semibold text-center mb-6 mt-7'>All Buyers</h1>
                <div className="overflow-x-auto mx-10">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                buyers.map((buyer, i) =>
                                    <tr>
                                        <th>{i + 1}</th>
                                        <td>{buyer.name}</td>
                                        <td>{buyer.email}</td>
                                        <td>
                                        {
                                            !buyer.role && <button onClick={ () => handleMakeAdmin(buyer?._id)} className="btn btn-info btn-xs">Make Admin</button>
                                        }
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;