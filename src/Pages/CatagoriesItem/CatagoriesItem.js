import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagory from './Catagory';

const CatagoriesItem = () => {
    const catagoryitems = useLoaderData();

    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-20'>
            {
                catagoryitems?.map(items => <Catagory
                    key={items._id}
                    items={items}
                ></Catagory>)
            }
        </div>


    );
};

export default CatagoriesItem;