import React, { useEffect, useState } from "react";
import "./cardBackground.css";
import { FaCheckCircle } from "react-icons/fa";
import { BiBookmarkHeart, BiHeart } from "react-icons/bi";

const Ads = ({ advertise }) => {
  const [isverify, setIsVerify] = useState("");
  console.log(advertise);
  const {
    seller,
    email,
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
  } = advertise;

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
    <div className="card-color py-4 mx-5 my-5 rounded-lg">
      <p
        className="ml-10 mb-2 text-primary 
      text-lg font-semibold"
      >
        Avilable
      </p>
      <div className=" md:flex lg:justify-between md:justify-evenly md:ml-10 sm:ml-0 card-background text-white">
        <div className="sm:mx-2 md:mx-0">
          <img
            className="rounded-lg md:w-72 sm:w-full h-44"
            src={image}
            alt=""
          />
        </div>

        <div className=" mx-2 ">
          <div className="">
            <p className="mb-2 font-semibold">Model: {model}</p>
          </div>
          <div className="grid grid-cols-2 sm:gap-0 md:gap-4 lg:gap-4">
            <p className="mb-2 font-semibold">Sale Price: {resalePrice}</p>
            <p className="mb-2 font-semibold text-red-600">
              New Price: {newPrice}
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
            <p className="mb-2 font-semibold">Post: {date}</p>
            <p className="mb-2 font-semibold">Used: {used}</p>
          </div>
          <p className="mb-2 font-semibold">Purchase Date: {purchase_time}</p>
          <div className="flex items-center mb-2 font-semibold ">
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
          <div className="grid grid-cols-2 gap-2 text-lg font-semibold">
            <button className="btn btn-sm btn-primary inline text-ali">
              <span className="">Add to Whislists</span>
            </button>
            <label htmlFor="my-modal-4" className="btn btn-sm btn-primary ">
              Booking Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
