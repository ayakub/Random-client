import React from "react";
import buy from "../../../assests/buy.png";
import sell from "../../../assests/sell.png";
import free from "../../../assests/free.png";
import "./cardBackground.css";

const OurService = () => {
  return (
    <div className="py-5">
      <h3 className="text-4xl font-semibold text-primary text-center mt-5 my-12">
        Our Services
      </h3>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white sm:mx-7 lg:mx-20">
        <div
          className="shadow-2xl p-8 card-color rounded-lg  service-card"
          data-aos="fade-up"
        >
          <div className="avatar flex justify-center">
            <div className="w-32 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
              <img src={buy} alt="" />
            </div>
          </div>
          <h4 className="text-xl my-5 text-center font-semibold text-primary ">
            BUY
          </h4>
          <p className="text-lg mt-5 text-justify">
            Welcome to our online used car dealership, where you can find the
            perfect vehicle to fit your needs and budget! We offer a wide range
            of high-quality pre-owned cars, trucks, and SUVs from all the top
            brands. Our vehicles are thoroughly inspected and serviced by our
            expert technicians, so you can be confident in your purchase. We
            also offer Carfax reports for all our vehicles, so you can see the
            full history of any vehicle you're interested in. So why you can see
            the wait vehicle you're? Browse our inventory now and find your next
            car today!
          </p>
        </div>
        <div
          className="shadow-2xl p-8 card-color rounded-lg service-card "
          data-aos="fade-up"
        >
          <div className="avatar flex justify-center">
            <div className="w-32 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
              <img src={sell} alt="" />
            </div>
          </div>
          <h4 className="text-xl my-5 text-center font-semibold text-primary ">
            SALE
          </h4>
          <p className="text-lg mt-5 text-justify">
            Looking to sell your car? Look no further than our online used car
            dealership! We make it easy and convenient to sell your vehicle for
            a fair price.At our dealership, we believe in providing excellent
            customer service and a hassle-free selling experience. That's why we
            offer transparent and fair pricing, as well as a no-obligation
            offer. We want to make the selling process as easy and stress-free
            as possible. So why wait? Sell your car to us today and get a fair
            price for your vehicle without the hassle of private sales or
            dealership negotiations.
          </p>
        </div>
        <div
          className="p-8 card-color rounded-lg service-card shadow-lg "
          data-aos="fade-up"
        >
          <div className="">
            <div className="avatar flex justify-center">
              <div className="w-32 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                <img src={free} alt="" />
              </div>
            </div>
            <h4 className="text-xl my-5 text-center font-semibold text-primary ">
              FREE SERVICING
            </h4>
            <p className="mt-5 text-lg text-justify">
              Our expert technicians will perform routine maintenance and
              inspections on your vehicle to keep it running smoothly and ensure
              it stays in top condition. And if any issues arise, we'll take
              care of them promptly and efficiently. At our dealership, we
              believe in going above and beyond for our customers. That's why we
              and financing options for all credit types. We want to make sure .
              So if you're in the market for a used car, come see us and take
              advantage of our free servicing offer. We're confident you'll love
              our selection, prices, and service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
