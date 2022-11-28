import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagory from './Catagory';
import Modal from './Modal';

const CatagoriesItem = () => {
    const [allusers, setAlluser] = useState({})
    useEffect(() => {
        fetch('https://reused-product-sell-server.vercel.app/usersAll')
            .then(res => res.json())
            .then(data => setAlluser(data))
    }, [])
    const catagoryitems = useLoaderData();
    return (
        <div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-20'>
                {
                    catagoryitems?.map(items => <Catagory
                        key={items._id}
                        items={items}
                        allusers={allusers}
                    ></Catagory>)
                }

            </div>
            <div>
                {
                    catagoryitems?.map(bookItem => <Modal
                        key={bookItem._id}
                        bookItem={bookItem}
                    ></Modal>)
                }
            </div>
        </div>


    );
};

export default CatagoriesItem;