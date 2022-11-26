import React from 'react';

const AllUserData = ({ users }) => {
    const { data: allusers = [], isLoading } = useQuery({
        queryKey: ['usersAll'],
        queryFn: () =>
            fetch('http://localhost:5000/usersAll')
                .then(res =>
                    res.json()
                )
    })
    console.log(users)
    return (
        <div>

        </div>
    );
};

export default AllUserData;