import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import useToken from '../../../hooks/useToken';

const SignUp = () => {
    const { createUser, googleLogin, updateUser } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const [signupError, setSignupError] = useState('')
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)

    if (token) {
        toast.success('signup successfull')
        navigate('/')
    }

    const handleSignup = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.select)
                    })
                    .catch(error => {
                        console.log(error)
                        setSignupError(error.message)
                    })
            })
            .catch(error => {
                console.log(error)
                setSignupError(error.message)
            })
    }

    const handleGoogleSignup = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                saveUser(user?.displayName, user?.email, user?.uid)
            })
            .catch(error => {
                console.log(error)
                setSignupError(error.message)
            })
    }

    const saveUser = (name, email, providerId) => {
        const user = {
            name,
            email,
            providerId
        }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(console.log(data))
                if (data.acknowledged) {
                    setCreatedUserEmail(email)
                }
            })
    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 border-2 border-slate-300  px-5 py-10'>
                <h1 className='text-3xl text-center'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name:</span>
                        </label>
                        <input {...register("name", { required: 'Name is required' })} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        {errors.name && <span className='text-red-500' role="alert">{errors.name.message}</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email:</span>
                        </label>
                        <input {...register("email", { required: 'Email is required' })} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        {errors.email && <span className='text-red-500' role="alert">{errors.email.message}</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password:</span>
                        </label>
                        <input {...register("password",
                            { required: 'password is required', minLength: { value: 9, message: 'password must be 9 digits' } })} type="password" placeholder="Type password" className="input input-bordered w-full" />
                        {errors.password && <span className='text-red-500' role="alert">{errors.password.message}</span>}
                    </div>
                    <select {...register("select")} className="select select-bordered select-secondary w-full mt-6">
                        <option value="user">user/buyer</option>
                        <option value="seller">seller</option>
                    </select>
                    <p className='text-red-600'>{signupError}</p>
                    <input className='btn w-full mt-6' type="submit" value="Signup" />
                    <p className='mt-3'>Already have an account? <Link to='/login' className='text-secondary font-semibold'>Please login</Link></p>
                </form>
                <button onClick={handleGoogleSignup} className='btn btn-outline w-full mt-6'>Sign Up With Google</button>
            </div>
        </div>
    );
};

export default SignUp;