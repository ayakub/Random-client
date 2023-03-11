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
import OurService from "./OurService";
import Review from "./Review";
import HappyClients from "./HappyClients";
import Contact from "./Contact";

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
    <div className="background-color ">
      <Carousel />
      <div>
        <h3 className="text-4xl font-semibold text-primary text-center mt-10">
          Advertise
        </h3>

        <div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-10"
          id="ads"
        >
          {Advertisement?.map((advertise) => (
            <Ads key={advertise._id} advertise={advertise}></Ads>
          ))}
        </div>
        <div></div>
      </div>
      <h2 className="text-4xl font-semibold text-primary text-center mt-5">
        Catagories
      </h2>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 sm:mx-5 md:mx-20">
        {catagoriesName.map((catagory) => (
          <Link
            className="btn btn-primary"
            to={`/catagoriesItem/${catagory._id}`}
          >
            <button key={catagory._id}>{catagory.catagory}</button>
          </Link>
        ))}
        {catagoriesName.map((catagory) => console.log(catagory))}
      </div>
      {/* other section */}
      <OurService></OurService>
      <ChoseUS></ChoseUS>
      <Review></Review>
      <Contact></Contact>
      {/* <HappyClients></HappyClients> */}

      {/* Put this part before </body> tag */}
    </div>
  );
};

export default Home;

// import { useState, useEffect } from "react";

// function Counter() {
//   const [totalSales, setTotalSales] = useState(100);
//   const [stock, setStock] = useState(50);
//   const [totalReviews, setTotalReviews] = useState(500);
//   const [timeLeft, setTimeLeft] = useState(60);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft((timeLeft) => timeLeft - 1);
//       setTotalSales((totalSales) => totalSales - 1);
//       setStock((stock) => stock - 1);
//       setTotalReviews((totalReviews) => totalReviews - 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <div className="flex flex-col items-center space-y-2">
//       <div className="flex items-center space-x-2">
//         <span className="font-bold text-2xl">{totalSales}</span>
//         <span className="text-gray-500">Total Sales</span>
//       </div>
//       <div className="flex items-center space-x-2">
//         <span className="font-bold text-2xl">{stock}</span>
//         <span className="text-gray-500">Stock</span>
//       </div>
//       <div className="flex items-center space-x-2">
//         <span className="font-bold text-2xl">{totalReviews}</span>
//         <span className="text-gray-500">Total Reviews</span>
//       </div>
//       <div className="text-center">
//         <span className="font-bold text-2xl">
//           {minutes < 10 ? `0${minutes}` : minutes}:
//           {seconds < 10 ? `0${seconds}` : seconds}
//         </span>
//         <span className="text-gray-500">Time Left</span>
//       </div>
//     </div>
//   );
// }
// export default Counter;
