import React from 'react';

const Ads = ({ advertise }) => {
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
        } = advertise
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
                    <h2>Resale Price: <span className='font-semibold text-red-600'> ${resalePrice}</span></h2>
                </div>

            </div>
        </div>
    );
};

export default Ads;