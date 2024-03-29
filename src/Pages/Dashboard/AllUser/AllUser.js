import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React from "react";
import { toast } from "react-toastify";
import Loading from "./Shared/Loading/Loading";

const AllUser = () => {
  const {
    data: allusers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["usersAll"],
    queryFn: () =>
      fetch(
        "https://reused-product-sell-server-ayakub.vercel.app/usersAll"
      ).then((res) => res.json()),
  });
  const handleUpdate = (id) => {
    fetch(
      `https://reused-product-sell-server-ayakub.vercel.app/usersAll/admin/${id}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-10">
      <h3 className="texl-4xl text-primary font-semibold mb-5">All User</h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>email</th>
                <th>Make Admin</th>
              </tr>
            </thead>
            <tbody>
              {allusers.map((users, i) => (
                <tr key={users._id}>
                  <td>{i + 1}</td>
                  <td>{users.email}</td>

                  <td>
                    <button
                      onClick={() => handleUpdate(users._id)}
                      className="btn btn-primary"
                    >
                      {users.role}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
