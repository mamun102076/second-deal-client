import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const handleAddProduct = data => {
        console.log(data)
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
                        <span className="label-text">Product Price:</span>
                    </label>
                    <input {...register("price", { required: 'Price is required' })} type="text" placeholder="Type  Product Price" className="input input-bordered w-full" />
                    {errors.price && <span className='text-red-500' role="alert">{errors.price.message}</span>}
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
                        <span className="label-text">Phone Number:</span>
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
                    <select {...register("category")}  className="select select-bordered w-full">
                        <option>HP</option>
                        <option>DELL</option>
                        <option>ASUS</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text">Year of Purchase:</span>
                    </label>
                    <input {...register("date", { required: 'Purchase year is required' })} type="text" placeholder="Enter Purchase year" className="input input-bordered w-full" />
                    {errors.date && <span className='text-red-500' role="alert">{errors.date.message}</span>}
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