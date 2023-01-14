import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const MyProducts = () => {
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products', {
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
    const handleAdvertiseItem = data => {
        console.log(data)
        const product = {
            productId: data._id,
            productName: data.productName,
            image: data.image,
            originalPrice: data.originalPrice,
            resalePrice: data.resalePrice,
            condtition: data.condtition,
            sellerName: data.sellerName,
            phone: data.phone,
            location: data.location,
            categoryName: data.categoryName,
            purchaseYear: data.purchaseYear,
            usedYear: data.usedYear,
            description: data.description,
            date: data.date
        }
        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(data)
                    toast.success('product advertised successfull')
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
                        <th>Purchase Year</th>
                        <th>Delete</th>
                        <th>Advertise</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((product, i) =>
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{product.productName}</td>
                                <td>{product.resalePrice}$</td>
                                <td>{product.purchaseYear}</td>
                                <td><button onClick={() => handleDeleteProduct(product._id)} className="btn btn-error btn-xs text-white">Delete</button></td>
                                <td><button onClick={() => handleAdvertiseItem(product)} className="btn btn-success btn-xs text-white">Available/Advertise</button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;