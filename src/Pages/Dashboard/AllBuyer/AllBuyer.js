import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../AllUser/Shared/Loading/Loading';

const AllBuyer = () => {
    const { data: allBuyers = [], isLoading } = useQuery({
        queryKey: ['usersAll'],
        queryFn: () =>
            fetch('https://reused-product-sell-server.vercel.app/usersAll/buyer')
                .then(res =>
                    res.json()
                )
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-10'>
            <h2 className='text-4xl font-semibold mb-5 text-primary'>All Buyer</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>email</th>
                            <th>role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allBuyers?.map((sellers, i) => <tr key={sellers._id}>
                                <th>{i + 1}</th>
                                <td>{sellers.email}</td>
                                <td>{sellers.role}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;