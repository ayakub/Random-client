import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {
    const { data: allBuyers = [], isLoading } = useQuery({
        queryKey: ['usersAll'],
        queryFn: () =>
            fetch('http://localhost:5000/usersAll/buyer')
                .then(res =>
                    res.json()
                )
    })
    return (
        <div className='my-10'>
            <h2 className='text-4xl font-semibold mb-5 text-primary'>All seller</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>name</th>
                            <th>email</th>
                            <th>role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allBuyers?.map((sellers, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{sellers.name}</td>
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