import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const { register,formState: {errors}, handleSubmit } = useForm()
    const navigate=  useNavigate()
    const locationa = useLocation()
    const from = locationa.state?.from?.pathname || '/' 
    const [loginerror,setLoginerror] = useState('')
    const handleLogin = data => {
        console.log(data)
        signIn(data.email,data.password)
        .then(result => {
            const user = result.user
            console.log(user)
            navigate(from, {replace: true})
            toast.success('login successfull')
        })
        .catch(error => {
            console.log(error)
            setLoginerror(error.message)
        })
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
                        <input {...register("email",{required: 'Email is required'})} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        {errors.email && <span className='text-red-500' role="alert">{errors.email.message}</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password:</span>
                        </label>
                        <input {...register("password", 
                        {required: 'password is required',minLength: {value: 9, message: 'password must be 9 digits'}})} type="password" placeholder="Type password" className="input input-bordered w-full" />
                        {errors.password && <span className='text-red-500' role="alert">{errors.password.message}</span>}
                    </div>
                    <p className='text-red-600'>{loginerror}</p>
                    <input className='btn w-full mt-4' type="submit" value="Login" />
                    <p className='mt-3'>New to this site? <Link to='/signup' className='text-secondary font-semibold'>create a new account</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;