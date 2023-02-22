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
      <h2 className="text-4xl font-semibold text-accent text-center mt-5">
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
    </div>
  );
};

export default Home;
