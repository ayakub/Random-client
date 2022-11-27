import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contex/AuthProvidor';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { data: bookingItems = [], refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(`http://localhost:5000/booking?email=${user?.email}`).then(res =>
                res.json()
            )
    })
    return (
        <div>
            <h3>Total Orders {bookingItems.length}</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookingItems.map(booking => <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={booking.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{booking.item}</div>
                                            <div className="text-sm ">Price: $<span className='text-red-600 font-semibold'>{booking.price}</span></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <button className='btn btn-primary'>Pay</button>
                                </td>
                            </tr>)
                        }




                    </tbody>
                    <tfoot>

                    </tfoot>

                </table>
            </div>
        </div >
    );
};

export default MyOrders;