import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit } = useForm()
    const handleSignup = data => {
        console.log(data.select)
    }
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 border-2 border-slate-300  px-5 py-10'>
                <h1 className='text-3xl text-center'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name:</span>
                        </label>
                        <input {...register("name")} type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email:</span>
                        </label>
                        <input {...register("email")} type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password:</span>
                        </label>
                        <input {...register("password")} type="password" placeholder="Type password" className="input input-bordered w-full" />
                    </div>
                    <select {...register("select")} className="select select-bordered select-secondary w-full mt-6">
                        <option value="user">User</option>
                        <option value="seller">Seller</option>
                    </select>
                    <input className='btn w-full mt-6' type="submit" value="Signup" />
                    <p className='mt-3'>Already have an account? <Link to='/login' className='text-secondary font-semibold'>Please login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;