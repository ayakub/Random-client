import React from 'react';
import banner from '../../../assests/banner.webp'
import price from '../../../assests/price.png'
import quality from '../../../assests/quality.png'
import trusted from '../../../assests/trusted.jpg'

const Home = () => {
    return (
        <div>
            <div >
                <img src={banner} alt="" />
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