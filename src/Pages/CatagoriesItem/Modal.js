import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contex/AuthProvidor';

const Modal = ({ bookItem }) => {
    const { user } = useContext(AuthContext)
    const { model, resalePrice, catagory } = bookItem;
    console.log(bookItem);
    const { register, handleSubmit, } = useForm();
    const handleModal = data => {
        console.log(data)
        const modalBookingItem = {
            username: data.name,
            email: data.email,
            category: data.catagory,
            item: data.item,
            price: data.price,
            location: data.location,
            number: data.number
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(modalBookingItem)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    toast.success('Booking confirmed');
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="booking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{model}</h3>
                    <form onSubmit={handleSubmit(handleModal)} className="w-full">

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">User Name</span></label>
                            <input type="text"
                                defaultValue={user?.displayName} readOnly
                                {...register("name", {
                                    required: "Name is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input type="email" defaultValue={user?.email} readOnly {...register("email", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Catagory</span></label>
                            <input type="text" defaultValue={catagory} readOnly {...register("catagory", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Item Name</span></label>
                            <input type="text" defaultValue={model} readOnly  {...register("item", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Price</span></label>
                            <input type="text" defaultValue={resalePrice} readOnly {...register("price", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Meet Location</span></label>
                            <input type="text" placeholder='Your Location'  {...register("location", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Number</span></label>
                            <input type="text" placeholder='Your number' {...register("number", {
                                required: "Numbeer is required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>



                        <div className=' w-full max-w-xs'>
                            <input className='btn btn-primary mt-5 ' value="Submit" type="submit" />
                        </div>

                    </form>
                </div>
            </div></>

    );
};

export default Modal;