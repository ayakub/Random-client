import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contex/AuthProvidor';
import Order from './Order';

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
            <div>
                {
                    bookingItems.map(item => <Order
                        key={item._id}
                        item={item}
                    >

                    </Order>
                    )
                }
            </div>
        </div >
    );
};

export default MyOrders;