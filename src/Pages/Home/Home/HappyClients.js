import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
// import 'tailwindcss/tailwind.css';

const HappyClient = ({ name, company, image, testimonial, rating }) => {
  // const stars = [];
  // for (let i = 1; i <= 5; i++) {
  //   stars.push(
  //     <FontAwesomeIcon key={i} icon={i <= rating ? faStar : faStarEmpty} />
  //   );
  // }

  return (
    <div className="max-w-lg mx-auto rounded overflow-hidden shadow-lg mb-6">
      <img className="w-full h-64 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="text-gray-700 text-base">{company}</div>
        <div className="text-gray-700 text-base">{testimonial}</div>
        <div className="mt-4">{}</div>
      </div>
    </div>
  );
};

const HappyClients = () => {
  const clients = [
    {
      name: "John Doe",
      company: "ABC Inc.",
      image: "https://picsum.photos/200",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis volutpat tortor, ut pharetra ex volutpat ac. Sed pulvinar bibendum gravida. Praesent vel lacus vitae tortor vulputate posuere sed id risus.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      company: "XYZ Corp.",
      image: "https://picsum.photos/200",
      testimonial:
        "Aliquam varius quam et metus hendrerit interdum. Sed ut ultricies magna. Maecenas ut ipsum eget lacus convallis imperdiet a eget sem. Proin euismod libero eu risus ullamcorper, ac pharetra odio tincidunt.",
      rating: 4,
    },
    // Add more clients as needed
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {clients.map((client, index) => (
        <div key={index} className="px-4">
          <HappyClient {...client} />
        </div>
      ))}
    </div>
  );
};

export default HappyClients;
