import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate()
    const date = new Date()
    const handleAddProduct = data => {
        console.log(data)
        const product = {
            productName: data.name,
            image: data.image,
            originalPrice: data.originalPrice,
            resalePrice: data.resalePrice,
            condtition: data.condition,
            sellerName: data.sellerName,
            phone: data.phone,
            location: data.location,
            categoryName: data.categoryName,
            purchaseYear: data.purchaseYear,
            date: data.date,
            usedYear: data.usedYear,
            description: data.description
        }
        fetch('http://localhost:5000/products',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('Product added successfully')
            navigate('/dashboard/myproducts')
        })
    }
    return (
        <div className='m-10 border-2 border-slate-300 p-10'>
            <h1 className='text-3xl text-center mb-5'>Add a product</h1>
            <form className='grid lg:grid-cols-2' onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text">Product Name:</span>
                    </label>
                    <input {...register("name", { required: 'Name is required' })} type="text" placeholder="Type Product Name" className="input input-bordered w-full" />
                    {errors.name && <span className='text-red-500' role="alert">{errors.name.message}</span>}
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text">Product Image URL:</span>
                    </label>
                    <input {...register("image", { required: 'URL is required' })} type="text" placeholder="url..." className="input input-bordered w-full" />
                    {errors.image && <span className='text-red-500' role="alert">{errors.image.message}</span>}
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text">Original Price:</span>
                    </label>
                    <input {...register("originalPrice", { required: 'Price is required' })} type="text" placeholder="Type  Product Price" className="input input-bordered w-full" />
                    {errors.originalPrice && <span className='text-red-500' role="alert">{errors.originalPrice.message}</span>}
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text">Resale Price:</span>
                    </label>
                    <input {...register("resalePrice", { required: 'Price is required' })} type="text" placeholder="Type  Product Price" className="input input-bordered w-full" />
                    {errors.resalePrice && <span className='text-red-500' role="alert">{errors.resalePrice.message}</span>}
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text">Product condition:</span>
                    </label>
                    <select {...register("condition")} className="select select-bordered w-full">
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text">Seller's Name:</span>
                    </label>
                    <input {...register("sellerName", { required: 'Seller Name is required' })} type="text" placeholder="Type Seller Name" className="input input-bordered w-full" defaultValue={user?.displayName} />
                    {errors.sellerName && <span className='text-red-500' role="alert">{errors.sellerName.message}</span>}
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text">Seller's Phone Number:</span>
                    </label>
                    <input {...register("phone", { required: 'Phone Number is required' })} type="text" placeholder="Type Phone Number" className="input input-bordered w-full" />
                    {errors.phone && <span className='text-red-500' role="alert">{errors.phone.message}</span>}
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text">Location:</span>
                    </label>
                    <input {...register("location", { required: 'Location is required' })} type="text" placeholder="Enter Location" className="input input-bordered w-full" />
                    {errors.location && <span className='text-red-500' role="alert">{errors.location.message}</span>}
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text">Product Category:</span>
                    </label>
                    <select {...register("categoryName")}  className="select select-bordered w-full">
                        <option>HP</option>
                        <option>DELL</option>
                        <option>ASUS</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text">Year of Purchase:</span>
                    </label>
                    <input {...register("purchaseYear", { required: 'Purchase year is required' })} type="text" placeholder="Enter Purchase year" className="input input-bordered w-full" />
                    {errors.purchaseYear && <span className='text-red-500' role="alert">{errors.purchaseYear.message}</span>}
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text">Product Posting Time:</span>
                    </label>
                    <input {...register("date", { required: 'Posting Time is required' })} type="text" placeholder="Enter Posting Time" className="input input-bordered w-full" defaultValue={date} />
                    {errors.date && <span className='text-red-500' role="alert">{errors.date.message}</span>}
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text">Product used Year:</span>
                    </label>
                    <input {...register("usedYear", { required: 'used year' })} type="text" placeholder="Enter Posting Time" className="input input-bordered w-full" />
                    {errors.usedYear && <span className='text-red-500' role="alert">{errors.usedYear.message}</span>}
                </div>
                <div className="form-control max-w-sm">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register("description", { required: 'Description is required' })} className="textarea textarea-bordered h-24" placeholder="Enter Product Description"></textarea>
                    {errors.description && <span className='text-red-500' role="alert">{errors.description.message}</span>}
                </div>
                <input className='btn btn-success w-full  mt-10' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;