import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import banner from '../../../assests/banner.webp'
import price from '../../../assests/price.png'
import quality from '../../../assests/quality.png'
import trusted from '../../../assests/trusted.jpg'
import Ads from './Ads';

const Home = () => {
    const catagoriesName = useLoaderData()
    console.log(catagoriesName);


    const { data: Advertisement = [], } = useQuery({
        queryKey: ['advertisement'],
        queryFn: () =>
            fetch('https://reused-product-sell-server-ayakub.vercel.app/advertiseing?advertise=true')
                .then(res =>
                    res.json()
                )
    })

    return (
        <div>
            <div >
                <img src={banner} alt="" />
            </div>


            <div>
                <h3 className='text-4xl font-semibold text-primary text-center mt-10'>Advertise</h3>

                <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-20'>
                    {
                        Advertisement?.map(advertise => <Ads
                            key={advertise._id}
                            advertise={advertise}

                        >

                        </Ads>)
                    }
                </div>

            </div>
            <h2 className='text-4xl font-semibold text-accent text-center mt-5'>Catagories</h2>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16'>
                {
                    catagoriesName.map(catagory => <Link className="btn btn-primary" to={`/catagoriesItem/${catagory._id}`}>
                        <button key={catagory._id} >{catagory.catagory}</button>
                    </Link>)
                }
            </div>
            {/* other section */}

            <div className='my-10'>
                <h3 className='text-4xl font-semibold text-center text-primary my-10'>Why Choose Us?</h3>
                <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div>
                        <h3 className='text-2xl font-semibold text-center mb-5'>best price</h3>
                        <div className='flex'>
                            <img style={{ width: '100px' }} src={price} alt="" />
                            <p className='ml-5'>A trust company is a legal entity that acts as a fiduciary, agent, or trustee on behalf of a person or business for the purpose of administration, management, and the eventual transfer of assets to a beneficial party.</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold text-center mb-5'>best Quality</h3>
                        <div className='flex'>
                            <img style={{ width: '100px' }} src={quality} alt="" />
                            <p className='ml-5'>When starting a company, most entrepreneurs focus their creative energy on developing an idea and turning it into a sellable product. But before you can begin selling any product or service</p>
                        </div>
                    </div>
                    <div>
                        <h3
                            className='text-2xl font-semibold text-center mb-5'>
                            Trusted
                        </h3>
                        <div className='flex'>
                            <img style={{ width: '100px' }} src={trusted} alt="" />
                            <p className='ml-5'>When starting a company, most entrepreneurs focus their creative energy on developing an idea and turning it into a sellable product. But before you can begin selling any product or service</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;