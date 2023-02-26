import React from "react";
import image1 from "../../../assests/review1.jpg";
import image2 from "../../../assests/review2.jpg";
import image3 from "../../../assests/review3.jpg";
import image4 from "../../../assests/review4.jpg";
import image5 from "../../../assests/review5.jpg";
import image6 from "../../../assests/review6.jpg";
import ReviewList from "./ReviewList";

const reviews = [
  {
    id: 1,
    name: "Eli Jabeth",
    image: `${image4}`,
    location: "Chattogram",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper ante ut ante ultricies, ac volutpat quam lobortis. In euismod sapien ut magna rhoncus, nec semper sapien lacinia.",
  },
  {
    id: 2,
    name: "Jane Doe",
    image: `${image1}`,
    location: "Dhaka",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper ante ut ante ultricies, ac volutpat quam lobortis. In euismod sapien ut magna rhoncus, nec semper sapien lacinia.",
  },
  {
    id: 3,
    name: "Bibi Jannat",
    image: `${image5}`,
    location: "Chattogram",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper ante ut ante ultricies, ac volutpat quam lobortis. In euismod sapien ut magna rhoncus, nec semper sapien lacinia.",
  },
  {
    id: 4,
    name: "Alice Johnson",
    image: `${image2}`,
    location: "Khulna",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper ante ut ante ultricies, ac volutpat quam lobortis. In euismod sapien ut magna rhoncus, nec semper sapien lacinia.",
  },
  {
    id: 5,
    name: "Jahed Khan",
    image: `${image3}`,
    location: "Rajshahi",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper ante ut ante ultricies, ac volutpat quam lobortis. In euismod sapien ut magna rhoncus, nec semper sapien lacinia.",
  },
  {
    id: 6,
    name: "Sadia Johora",
    image: `${image6}`,
    location: "Khagrachari",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper ante ut ante ultricies, ac volutpat quam lobortis. In euismod sapien ut magna rhoncus, nec semper sapien lacinia.",
  },
];

const Review = () => {
  return (
    <div className="py-5">
      <h3 className="text-4xl font-semibold text-primary text-center mt-5 my-12">
        Reviews
      </h3>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white sm:mx-7 lg:mx-20 ">
        {reviews.map((review) => (
          <ReviewList key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Review;
