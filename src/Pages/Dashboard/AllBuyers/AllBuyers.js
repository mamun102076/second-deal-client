import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
    const [buyers, setBuyers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/buyers')
            .then(response => {
                console.log(response.data)
                setBuyers(response.data)
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
                        buyers.map((buyer,i) =>
                            <tr>
                                <th>{i+1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyers;