import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({ card, setCard }) => {
    const { user } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const productName = form.productName.value
        const price = form.price.value
        const location = form.location.value
        const number = form.number.value
        console.log(name, email, productName, price, location, number)

        const booking = {
            name,
            email,
            productName,
            price,
            location,
            number
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
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
            <input type="checkbox" id={`${card.name}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={`${card.name}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mt-6">{card?.name}</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full mt-5" defaultValue={user?.displayName} disabled />
                        <input type="email" name='email' placeholder="Type here" className="input input-bordered w-full mt-5" defaultValue={user?.email} disabled />
                        <input type="text" name="productName" placeholder="Type here" className="input input-bordered w-full mt-5" defaultValue={card?.name} disabled />
                        <input type="text" name="price" placeholder="Type here" className="input input-bordered w-full mt-5" defaultValue={card?.resalePrice} disabled />
                        <input type="text" name="location" placeholder="Type meeting location" className="input input-bordered w-full mt-5" required />
                        <input type="text" name="number" placeholder="Type phone number" className="input input-bordered w-full mt-5" required />
                        <input type="submit" className="btn w-full mt-5" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;