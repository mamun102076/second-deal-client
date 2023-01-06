import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllSellers = () => {
    const [sellers, setSellers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/seller')
            .then(response => {
                console.log(response.data)
                setSellers(response.data)
            })
    }, [])
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
                        sellers.map((seller,i) =>
                            <tr>
                                <th>{i+1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;