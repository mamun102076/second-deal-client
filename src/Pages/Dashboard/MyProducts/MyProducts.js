import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const MyProducts = () => {
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products',{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    const handleDeleteProduct = id => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('product deleted successfull')
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
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>purchase Year</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((product, i) =>
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.purchaseYear}</td>
                                <td><button className="btn btn-info btn-sm text-white">Available</button></td>
                                <td><button onClick={() => handleDeleteProduct(product._id)} className="btn btn-error btn-xs text-white">Delete</button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;