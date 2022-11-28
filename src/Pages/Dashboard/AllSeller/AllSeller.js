import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React from 'react';
import swal from 'sweetalert';

const AllSeller = () => {
    const { data: allusers = [], refetch } = useQuery({
        queryKey: ['usersAll'],
        queryFn: () =>
            fetch('http://localhost:5000/usersAll/seller')
                .then(res =>
                    res.json()
                )
    })
    const handleDelete = id => {
        fetch(`http://localhost:5000/usersAll/${id}`, {
            method: 'DELETE'
        }
        )
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    swal("deleted!", "success!", "success");
                }
                console.log(data)
                refetch()
            })
    }
    return (
        <div className='my-10'>
            <h2 className='text-4xl font-semibold mb-5 text-primary'>All seller</h2>

            <div className="">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>name</th>
                            <th>email</th>
                            <th>role</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allusers?.map((sellers, i) => <tr key={sellers._id}>
                                <th>{i + 1}</th>
                                <td>{sellers.name}</td>
                                <td>{sellers.email}</td>
                                <td>{sellers.role}</td>
                                <td><button onClick={() => handleDelete(sellers._id)} className="btn bg-red-600">delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;