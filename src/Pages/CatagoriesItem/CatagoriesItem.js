import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagory from './Catagory';
import Modal from './Modal';

const CatagoriesItem = () => {
    const catagoryitems = useLoaderData();

    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20'>
                {
                    catagoryitems?.map(items => <Catagory
                        key={items._id}
                        items={items}
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