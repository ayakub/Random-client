import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contex/AuthProvidor';

const CatagoriesPost = () => {
    const { register, handleSubmit, } = useForm();
    const { user } = useContext(AuthContext)
    const imageHostKey = '509aa0a2fc583b7f6c3e65417809235d';
    const date = new Date().toLocaleDateString("de-DE")
    console.log(date);

    const handleAddProduct = data => {
        console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        seller: data.username,
                        model: data.name,
                        newPrice: data.new_price,
                        resalePrice: data.sell_price,
                        phone: data.number,
                        used: data.use_time,
                        purchase_time: data.purchase_time,
                        catagory: data.catagory,
                        location: data.location,
                        condition: data.condition,
                        image: imgData.data.url,
                        date: date,
                    }
                    console.log(product)

                    //product data added database

                    fetch('http://localhost:5000/catagory', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            if (result.acknowledged) {
                                toast.success(`is added successfully`);
                            }
                        })
                }


            })
    }


    return (
        <div className='flex justify-center items-center mb-10' >
            <div className='p-7'>
                <h2 className='text-4xl text-primary font-semibold mb-5 text-center'>Add a Car</h2>
                <form onSubmit={handleSubmit(handleAddProduct)} >

                    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Seller Name</span></label>
                            <input type="text" placeholder='Product Name' defaultValue={user?.displayName} {...register("username", {
                                required: "Product name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Name</span></label>
                            <input type="text" placeholder='Product Name' {...register("name", {
                                required: "Product name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Brand new price</span></label>
                            <input type="number" placeholder='brand new price' {...register("new_price", {
                                required: "Brand new price is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Resale price</span></label>
                            <input type="number" placeholder='resale price' {...register("sell_price", {
                                required: "resale is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Phone Number</span></label>
                            <input type="number" placeholder='phone number' {...register("number", {
                                required: "resale is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Use Time</span></label>
                            <input type="text" placeholder='use time' {...register("use_time", {
                                required: "Product name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Purchase Date</span></label>
                            <input type="date"  {...register("purchase_time", {
                                required: "Product name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <label className="label"> <span className="label-text">Chose Catagory</span></label>
                            <select className="select select-bordered w-full max-w-xs" {...register("catagory", {
                                required: 'Select one brand'
                            })}>
                                <option defaultChecked>Tesla</option>
                                <option>Ferari</option>
                                <option>Range Rover</option>

                            </select>
                        </div>

                        <div>
                            <label className="label"> <span className="label-text">Your Location</span></label>
                            <select className="select select-bordered w-full max-w-xs" {...register("location", {
                                required: 'Select one brand'
                            })}>
                                <option>Dhaka</option>
                                <option>Chittagong</option>
                                <option>Rajshai</option>
                                <option>Khulna</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="label"> <span className="label-text">Product Condition</span></label>
                            <select className="select select-bordered w-full max-w-xs" {...register("condition", {
                                required: 'select condition'
                            })}>
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Upload Image</span></label>
                            <input type="file"  {...register("image", {
                                required: "Product name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                    </div>
                    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Name</span></label>
                            <input type="text" placeholder='Product Name' {...register("name", {
                                required: "Product name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Brand new price</span></label>
                            <input type="number" placeholder='brand new price' {...register("new_price", {
                                required: "Brand new price is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Resale price</span></label>
                            <input type="number" placeholder='resale price' {...register("sell_price", {
                                required: "resale is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Phone Number</span></label>
                            <input type="number" placeholder='phone number' {...register("number", {
                                required: "resale is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Use Time</span></label>
                            <input type="text" placeholder='use time' {...register("use_time", {
                                required: "Product name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Purchase Date</span></label>
                            <input type="date"  {...register("purchase_time", {
                                required: "Product name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <label className="label"> <span className="label-text">Chose Catagory</span></label>
                            <select className="select select-bordered w-full max-w-xs" {...register("catagory", {
                                required: 'Select one brand'
                            })}>
                                <option defaultChecked>Tesla</option>
                                <option>Ferari</option>
                                <option>Range Rover</option>

                            </select>
                        </div>

                        <div>
                            <label className="label"> <span className="label-text">Your Location</span></label>
                            <select className="select select-bordered w-full max-w-xs" {...register("location", {
                                required: 'Select one brand'
                            })}>
                                <option>Dhaka</option>
                                <option>Chittagong</option>
                                <option>Rajshai</option>
                                <option>Khulna</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="label"> <span className="label-text">Product Condition</span></label>
                            <select className="select select-bordered w-full max-w-xs" {...register("condition", {
                                required: 'select condition'
                            })}>
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Upload Image</span></label>
                            <input type="file"  {...register("image", {
                                required: "Product name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                    </div>

                    <div className='flex justify-center'>
                        <input className='btn btn-primary mt-5 w-full md:w-1/2 lg:w-1/2' value="Add a product" type="submit" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CatagoriesPost;