import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React from 'react';
import swal from 'sweetalert';
import Loading from '../AllUser/Shared/Loading/Loading';

const AllSeller = () => {
    const { data: allusers = [], isLoading, refetch } = useQuery({
        queryKey: ['usersAll'],
        queryFn: () =>
            fetch('http://localhost:5000/usersAll/seller')
                .then(res =>
                    res.json()
                )
    })
    const handleDelete = id => {
        const permisson = window.confirm('are you sure ,deleted seller?')
        if (permisson) {
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

    }
    if (isLoading) {
        return <Loading></Loading>
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
                            <th>verified</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allusers?.map((sellers, i) => <tr key={sellers._id}>
                                <th>{i + 1}</th>
                                <td>{sellers.name}</td>
                                <td>{sellers.email}</td>
                                {/* verified button*/}
                                <td><button>{sellers.verified ? sellers.verified :
                                    "no verified"
                                }</button></td>

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