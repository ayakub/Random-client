import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assests/error.jpg'

const Error = () => {
    return (
        <div className='mb-20'>
            <div className='flex justify-center'>
                <img src={error} alt="" />
            </div>
            <div className='flex justify-center'>
                <Link className='btn btn-primary' to='/'><button>Back Home</button></Link>
            </div>
        </div>
    );
};

export default Error;