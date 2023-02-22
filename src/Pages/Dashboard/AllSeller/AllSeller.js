import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React from "react";
import swal from "sweetalert";
import Loading from "../AllUser/Shared/Loading/Loading";

const AllSeller = () => {
  const {
    data: allusers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["usersAll"],
    queryFn: () =>
      fetch(
        "https://reused-product-sell-server-ayakub.vercel.app/usersAll/seller"
      ).then((res) => res.json()),
  });
  const handleDelete = (id) => {
    const permisson = window.confirm("are you sure ,deleted seller?");
    if (permisson) {
      fetch(
        `https://reused-product-sell-server-ayakub.vercel.app/usersAll/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            swal("deleted!", "success!", "success");
            refetch();
          }
          console.log(data);
        });
    }
  };
  const handleVerify = (id) => {
    fetch(
      `https://reused-product-sell-server-ayakub.vercel.app/verify?id=${id}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-10">
      <h2 className="text-4xl font-semibold mb-5 text-primary">All seller</h2>

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
            {allusers?.map((sellers, i) => (
              <tr key={sellers._id}>
                <th>{i + 1}</th>
                <td>{sellers.name}</td>
                <td>{sellers.email}</td>
                {/* verified button*/}
                <td>
                  <button onClick={() => handleVerify(sellers._id)}>
                    <span>
                      {sellers?.verify ? sellers.verify : "no verified"}
                    </span>
                  </button>
                </td>

                {/* {sellers?.verified ? sellers.verified :
                                    "no verified"
                                } */}

                <td>
                  <button
                    onClick={() => handleDelete(sellers._id)}
                    className="btn bg-red-600"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
