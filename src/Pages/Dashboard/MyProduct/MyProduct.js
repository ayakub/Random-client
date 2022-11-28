import { useQuery } from '@tanstack/react-query';
import { handler } from 'daisyui';
import React, { useContext } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../../Contex/AuthProvidor';
import Product from './Product';

const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(`http://localhost:5000/addproduct?email=${user.email}`).then(res =>
                res.json()
            )
    })
    const handdleDeleteProduct = id => {
        fetch(`http://localhost:5000/myprosuct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                window.confirm('are you sure deleted product')
                if (data.deletedCount > 0) {
                    swal("Product Delete!", "success!", "success");
                }
            })
    }
    return (
        <div>
            <h3 className='text-primary text-4xl'>My Product: {myProducts.length}</h3>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {
                    myProducts?.map(myProduct => <Product
                        key={myProduct.__id}
                        myProduct={myProduct}
                        handdleDeleteProduct={handdleDeleteProduct}
                    >

                    </Product>)
                }
            </div>
        </div>
    );
};

export default MyProduct;