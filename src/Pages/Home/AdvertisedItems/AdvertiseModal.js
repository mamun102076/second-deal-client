import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AdvertiseModal = ({card, setCard }) => {
    const { user } = useContext(AuthContext)
    const {_id,productName,image,resalePrice} = card
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const userName = form.userName.value
        const email = form.email.value
        const image = form.image.value
        const price = form.price.value
        const location = form.location.value
        const number = form.number.value
        console.log(userName, email, price, location, number)

        const booking = {
            productName: card.productName,
            image,
            userName,
            email,
            price,
            location,
            number
        }

        fetch('https://second-deal-server.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('boking successfull')
                setCard(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id={`${card._id}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={`${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg mt-10 mb-5"><span className='font-bold'>Product Name:</span> <span className='font-semibold'>{productName}</span></h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">User Name:</span>
                            </label>
                            <input type="text" name='userName' placeholder="Type here" className="input input-bordered w-full" defaultValue={user?.displayName} disabled />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">User Email:</span>
                            </label>
                            <input type="email" name='email' placeholder="Type here" className="input input-bordered w-full" defaultValue={user?.email} disabled />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Product image url:</span>
                            </label>
                            <input type="text" name='image' placeholder="Type here" className="input input-bordered w-full" defaultValue={image} disabled />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Product price:</span>
                            </label>
                            <input type="text" name="price" placeholder="Type here" className="input input-bordered w-full" defaultValue={resalePrice} disabled />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Meeting Location:</span>
                            </label>
                            <input type="text" name="location" placeholder="Type meeting location" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Phone Number:</span>
                            </label>
                            <input type="text" name="number" placeholder="Type phone number" className="input input-bordered w-full" required />
                        </div>
                        <input type="submit" className="btn w-full mt-5" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseModal;