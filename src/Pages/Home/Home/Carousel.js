import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import image1 from "../../../assests/slide1.png";
import image2 from "../../../assests/slide2.png";
import image3 from "../../../assests/slide3.png";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "./cardBackground.css";

const slides = [
  {
    id: 1,
    text: `SALE`,
    text2: "OLD CAR",
    text3: "VERY FAST TIME",
    text4:
      "Selling a used car can be a daunting task, but using a website can make the process much easier. There are a variety of websites that allow you to list your car for sale, and they each offer their own benefits",
    imageUrl: `${image1}`,
  },
  {
    id: 2,
    text: `BUY`,
    text2: "REUSED CAR",
    text3: "VERY FAST TIME",
    text4:
      "Selling a used car can be a daunting task, but using a website can make the process much easier. There are a variety of websites that allow you to list your car for sale, and they each offer their own benefits",
    imageUrl: `${image2}`,
  },
  {
    id: 3,
    text: `SALE`,
    text2: "OLD CAR",
    text3: "VERY FAST TIME",
    imageUrl: `${image3}`,
    text4:
      "Selling a used car can be a daunting task, but using a website can make the process much easier. There are a variety of websites that allow you to list your car for sale, and they each offer their own benefits",
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const numSlides = slides.length;

  // Function to advance to the next slide
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % numSlides);
  };

  // Function to go back to the previous slide
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + numSlides) % numSlides);
  };

  return (
    <div className="relative h-screen card-color ">
      {/* Carousel Slides */}
      <div className="absolute inset-0 sm:pb-10">
        {slides.map((slide, index) => (
          <Transition
            key={slide.id}
            show={index === currentSlide}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="absolute inset-0 lg:grid flex flex-col-reverse lg:grid-cols-2  items-center justify-center -sm:mb-10 md:mb-0"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              {/* Text */}
              <div className="w-5/5 lg:ml-16  p-8 text-white">
                <h1 className="text-5xl font-bold mb-2">{slide.text}</h1>
                <h1 className="text-5xl font-bold mb-2">{slide.text2}</h1>
                <h1 className="text-5xl font-bold mb-6">{slide.text3}</h1>
                <h1 className=" mb-6">{slide.text4}</h1>
                <button className="bg-primary px-7 py-2 ">SHOW OFFER</button>
              </div>

              {/* Image */}
              <div className="w-5/5">
                <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
              </div>
            </div>
          </Transition>
        ))}
      </div>

      {/* Prev and Next Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-black font-bold rounded-full shadow-lg"
        onClick={prevSlide}
      >
        <BiChevronLeft className="text-primary text-5xl" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2  text-black font-bold rounded-full shadow-lg "
        onClick={nextSlide}
      >
        <BiChevronRight className="text-primary text-5xl" />
      </button>
    </div>
  );
}
export default Carousel;
