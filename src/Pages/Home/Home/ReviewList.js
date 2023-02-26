import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./cardBackground.css";

const ReviewList = ({ review }) => {
  return (
    <div>
      <div className="card-color p-6 rounded-lg shadow-md review-card">
        <div className="flex justify-between">
          <div className="flex items-center mb-4">
            <img
              src={review?.image}
              alt={review?.name}
              className="w-20 h-20 rounded-full mr-4"
            />
            <h3 className=" grid grid-cols-1">
              <span className="font-bold text-lg text-primary">
                {review?.name}
              </span>{" "}
              <span className=" text-sm ">{review.location}</span>
            </h3>
          </div>
          <div className="flex review-star items-center">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
        </div>
        <p>{review?.text}</p>
      </div>
    </div>
  );
};

export default ReviewList;
