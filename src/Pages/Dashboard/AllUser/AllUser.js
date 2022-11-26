import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {
    const { data: allusers = [], isLoading } = useQuery({
        queryKey: ['usersAll'],
        queryFn: () =>
            fetch('http://localhost:5000/usersAll')
                .then(res =>
                    res.json()
                )
    })
    return (
        <div className='my-10'>
            <h3
                className='texl-4xl text-primary font-semibold mb-5'>
                All User
            </h3>
            <div>
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
                                allusers.map((users, i) => <tr>
                                    <th>{i + 1}</th>
                                    <td>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td>{users.role}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div >
    );
};

export default AllUser;

