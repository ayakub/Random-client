import React from "react";
import image1 from "../../../assests/review1.jpg";
import image2 from "../../../assests/review2.jpg";
import image3 from "../../../assests/review3.jpg";
import image4 from "../../../assests/review4.jpg";
import image5 from "../../../assests/review5.jpg";
import image6 from "../../../assests/review6.jpg";

const reviews = [
  {
    id: 1,
    name: "Eli Jabeth",
    image: `${image4}`,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper ante ut ante ultricies, ac volutpat quam lobortis. In euismod sapien ut magna rhoncus, nec semper sapien lacinia.",
  },
  {
    id: 2,
    name: "Jane Doe",
    image: `${image1}`,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper ante ut ante ultricies, ac volutpat quam lobortis. In euismod sapien ut magna rhoncus, nec semper sapien lacinia.",
  },
  {
    id: 3,
    name: "Bibi Jannat",
    image: `${image5}`,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper ante ut ante ultricies, ac volutpat quam lobortis. In euismod sapien ut magna rhoncus, nec semper sapien lacinia.",
  },
  {
    id: 4,
    name: "Alice Johnson",
    image: `${image2}`,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper ante ut ante ultricies, ac volutpat quam lobortis. In euismod sapien ut magna rhoncus, nec semper sapien lacinia.",
  },
  {
    id: 5,
    name: "Jahed Khan",
    image: `${image3}`,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper ante ut ante ultricies, ac volutpat quam lobortis. In euismod sapien ut magna rhoncus, nec semper sapien lacinia.",
  },
  {
    id: 6,
    name: "Sadia Johora",
    image: `${image6}`,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper ante ut ante ultricies, ac volutpat quam lobortis. In euismod sapien ut magna rhoncus, nec semper sapien lacinia.",
  },
];

const Review = ({ review }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={review.image}
          alt={review.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <h3 className="font-bold text-lg">{review.name}</h3>
      </div>
      <p>{review.text}</p>
    </div>
  );
};

const ReviewList = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
