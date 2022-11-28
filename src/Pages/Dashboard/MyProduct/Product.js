import React from 'react';

const Product = ({ myProduct, handdleDeleteProduct }) => {
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
        } = myProduct
    const handleAdvertisment = id => {
        console.log(id)
        fetch(`https://reused-product-sell-server-ayakub.vercel.app/advertiesment?id=${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="card bg-base-100 shadow-xl mb-10 pb-10 mt-10">
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
                <div className='flex justify-between'>
                    <h2 className=" ">
                        Location: <span className='font-semibold text-blue-600'>: {location}</span>
                    </h2>
                    <h2>New Price: <span className='font-semibold text-red-600'> ${newPrice}</span></h2>
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
            <div className='flex justify-around'>
                <button onClick={() => handleAdvertisment(myProduct._id)} className='btn btn-primary'>Advertiesment</button>

                <button onClick={() => handdleDeleteProduct(myProduct._id)} className='btn bg-red-600'>delete</button>

            </div>
        </div>
    );
};

export default Product;