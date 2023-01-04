import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm()
    const handleLogin = data => {
        console.log(data)
    }
    return (
        <div className='h-[550px] flex justify-center items-center'>
            <div className='w-96 border-2 border-slate-300  px-5 py-10'>
                <h1 className='text-3xl text-center'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                    <input className='btn w-full mt-4' type="submit" value="Login" />
                    <p className='mt-3'>New to this site? <Link to='/signup' className='text-secondary font-semibold'>create a new account</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;