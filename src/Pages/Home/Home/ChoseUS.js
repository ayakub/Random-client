import React from "react";
import price from "../../../assests/price.png";
import quality from "../../../assests/quality.png";
import trusted from "../../../assests/trusted.png";
import "../Home/cardBackground.css";

const ChoseUS = () => {
  return (
    <div className="py-10">
      <h3 className="text-4xl font-semibold text-center text-primary my-10">
        Why Choose Us?
      </h3>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white sm:mx-7 lg:mx-20">
        <div>
          <div className="shadow-2xl p-8 card-color rounded-lg chose-us ">
            <div className="avatar flex justify-center">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={price} alt="" />
              </div>
            </div>
            <p className="text-lg mt-5">
              A trust company is a legal entity that acts as a fiduciary, agent,
              or trustee on behalf of a person or business for the purpose of
              administration, management, and the eventual transfer of assets to
              a beneficial party.
            </p>
          </div>
        </div>
        <div>
          <div className=" p-8 card-color rounded-lg chose-us ">
            <div className="avatar flex justify-center">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={quality} alt="" />
              </div>
            </div>
            <p className="mt-5">
              When starting a company, most entrepreneurs focus their creative
              energy on developing an idea and turning it into a sellable
              product. But before you can begin selling any product or
              service.But before you can begin selling any product or service
            </p>
          </div>
        </div>
        <div className="p-8 card-color rounded-lg chose-us shadow-lg ">
          <div className="">
            <div className="avatar flex justify-center">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={trusted} alt="" />
              </div>
            </div>
            <p className="mt-5">
              When starting a company, most entrepreneurs focus their creative
              energy on developing an idea and turning it into a sellable
              product. But before you can begin selling any product or service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseUS;
