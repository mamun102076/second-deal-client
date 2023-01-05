import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyProducts = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products')
            const data = res.json()
            return data
        }
    })
    return (
        <div className="overflow-x-auto m-10">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>purchase Year</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,i) =>
                            <tr>
                                <th>{i+1}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.purchaseYear}</td>
                                <td><button className="btn btn-info btn-sm text-white">Available</button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;