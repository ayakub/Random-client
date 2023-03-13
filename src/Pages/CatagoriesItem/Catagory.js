import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contex/AuthProvidor";
import { FaCheckCircle } from "react-icons/fa";

const Catagory = ({ items, allusers }) => {
  const [isverify, setIsVerify] = useState();

  const { user, setModalData } = useContext(AuthContext);
  // console.log(items);
  const {
    email,
    seller,
    model,
    newPrice,
    resalePrice,
    phone,
    used,
    purchase_time,
    catagory,
    location,
    condition,
    image,
    date,
  } = items;
  useEffect(() => {
    fetch(
      `https://reused-product-sell-server-ayakub.vercel.app/verifyuser?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsVerify(data.verify);
        console.log(isverify.verify);
      });
  }, []);
  return (
    <div className="card bg-base-100 shadow-xl mb-10 pb-10">
      <figure>
        <img className=" h-64" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title text-blue-600">{model}</h2>
          <div className=" ">
            Used: <span className="font-semibold">{used}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <h2 className=" ">
            Brand:{" "}
            <span className="font-semibold text-blue-600">{catagory}</span>
          </h2>
          <h2>
            Post: <span className="font-semibold"> {date}</span>
          </h2>
        </div>
        <div className="flex justify-between">
          <h2 className=" ">
            Condition:{" "}
            <span className="font-semibold text-blue-600">: {condition}</span>
          </h2>
          <h2>
            Resale Price:{" "}
            <span className="font-semibold text-red-600"> ${resalePrice}</span>
          </h2>
        </div>
        <div className="flex justify-between">
          <h2 className=" ">
            Location:{" "}
            <span className="font-semibold text-blue-600">: {location}</span>
          </h2>
          <h2>
            New Price:{" "}
            <span className="font-semibold text-red-600"> ${newPrice}</span>
          </h2>
        </div>
        <div className="">
          <h2 className=""></h2>

          <h2>
            Purchase Date:{" "}
            <span className="font-semibold "> {purchase_time}</span>
          </h2>
        </div>
        <div>
          <h2 className=" ">
            Contact:{" "}
            <span className="font-semibold text-blue-600">: {phone}</span>
          </h2>
        </div>
        <div className="flex items-center ">
          <h2 className="mr-1">
            Seller:{" "}
            <span className="font-semibold text-blue-600">: {seller}</span>
          </h2>
          {isverify === "verified" ? (
            <span className="text-blue-600">
              <FaCheckCircle />
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex justify-center">
        {/* {user?.email && ( */}
        <label
          onClick={() => setModalData(items)}
          htmlFor="booking"
          className="btn btn-primary w-3/5"
        >
          Book Now
        </label>

        {/* )} */}
      </div>
    </div>
  );
};

export default Catagory;
