import React, { useContext } from 'react';
import { AuthContext } from '../../Contex/AuthProvidor';

const Catagory = ({ items }) => {
    const { user } = useContext(AuthContext)
    // console.log(items);
    const
        {
            seller,
            model,
            newPrice,
            resalePrice,
            phone,
            used,
            purchase_time,
            catagory,
            location,
            condition,
            image,
            date
        } =
            items;
    return (
        <div className="card bg-base-100 shadow-xl mb-10 pb-10">
            <figure><img className=' h-64' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="card-title text-blue-600">
                        {model}
                    </h2>
                    <div className=" ">Used: <span className='font-semibold'>{used}</span></div>
                </div>
                <div className='flex justify-between'>
                    <h2 className=" ">
                        Brand: <span className='font-semibold text-blue-600'>{catagory}</span>
                    </h2>
                    <h2>Post: <span className='font-semibold'> {date}</span></h2>
                </div>
                <div className='flex justify-between'>
                    <h2 className=" ">
                        Condition: <span className='font-semibold text-blue-600'>: {condition}</span>
                    </h2>
                    <h2>Resale Price: <span className='font-semibold text-red-600'> {resalePrice}</span></h2>
                </div>
                <div className='flex justify-between'>
                    <h2 className=" ">
                        Location: <span className='font-semibold text-blue-600'>: {location}</span>
                    </h2>
                    <h2>New Price: <span className='font-semibold text-red-600'> {newPrice}</span></h2>
                </div>
                <div className=''>
                    <h2 className=" ">
                        Seller Name: <span className='font-semibold text-red-600'>: {seller ? seller : 'seller name not avilable'}</span>
                    </h2>

                    <h2>Purchase Date: <span className='font-semibold '> {purchase_time}</span></h2>
                </div>
                <div>
                    <h2 className=" ">
                        Contact: <span className='font-semibold text-blue-600'>: {phone}</span>
                    </h2>
                </div>
            </div>
            <div className='flex justify-center'>
                {
                    user?.email &&
                    <label htmlFor="booking" className="btn btn-primary w-4/5">Book Now</label>
                }
            </div>
        </div>
    );
};

export default Catagory;