import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import banner from "../../../assests/banner.webp";
import Loading from "../../Dashboard/AllUser/Shared/Loading/Loading";
import Ads from "./Ads";
import "./cardBackground.css";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Carousel from "./Carousel";
import ChoseUS from "./ChoseUS";

const Home = () => {
  const catagoriesName = useLoaderData();
  console.log(catagoriesName);

  const { data: Advertisement = [], isLoading } = useQuery({
    queryKey: ["advertisement"],
    queryFn: () =>
      fetch(
        "https://reused-product-sell-server-ayakub.vercel.app/advertiseing?advertise=true"
      ).then((res) => res.json()),
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="background-color">
      <Carousel />
      <div>
        <h3 className="text-4xl font-semibold text-primary text-center mt-10">
          Advertise
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-10">
          {Advertisement?.map((advertise) => (
            <Ads key={advertise._id} advertise={advertise}></Ads>
          ))}
        </div>
        <div></div>
      </div>
      <h2 className="text-4xl font-semibold text-primary text-center mt-5">
        Catagories
      </h2>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 sm:mx-5 md:mx-20">
        {catagoriesName.map((catagory) => (
          <Link
            className="btn btn-primary"
            to={`/catagoriesItem/${catagory._id}`}
          >
            <button key={catagory._id}>{catagory.catagory}</button>
          </Link>
        ))}
      </div>
      {/* other section */}

      <ChoseUS></ChoseUS>

      <label htmlFor="my-modal-4" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label>
    </div>
  );
};

export default Home;
