import { useQuery } from '@tanstack/react-query';
import { handler } from 'daisyui';
import React, { useContext } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../../Contex/AuthProvidor';
import Loading from '../AllUser/Shared/Loading/Loading';
import Product from './Product';

const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(`https://reused-product-sell-server.vercel.app/addproduct?email=${user.email}`).then(res =>
                res.json()
            )
    })
    const handdleDeleteProduct = id => {
        const permision = window.confirm('are you sure deleted product')
        if (permision) {
            fetch(`https://reused-product-sell-server.vercel.app/myprosuct/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        swal("Product Delete!", "success!", "success");
                        refetch()
                    }
                })

        }

    }
    if (isLoading) {
        return <Loading></Loading>
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