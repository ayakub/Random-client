import React from "react";
import Lottie from "lottie-react";
import animation from "./131501-send-mail.json";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaRegEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-5 text-primary  mt-5 sm:mx-7 lg:mx-20">
      <h2 className="text-4xl font-semibold text-primary text-center ">
        Contact Me
      </h2>
      <div className="mx-5 md:mx-0 mt-7  grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center sm:justify-center ">
        <div>
          <Lottie animationData={animation} loop={true} />
        </div>
        <div>
          <form
            action="https://formsubmit.co/ac3356adb300bac95ca02148fe910146"
            method="POST"
          >
            <label>
              <span className="text-white text-2xl">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered  w-full mt-2"
            />
            <br />
            <br />
            <label htmlFor="" className="text-white text-2xl">
              Email
            </label>
            <input
              name="email"
              type="Email"
              placeholder="your email"
              className="input input-bordered  w-full mt-2"
            />
            <br />
            <br />
            <label htmlFor="" className="text-white text-2xl">
              Message
            </label>
            <textarea
              name="message"
              className="textarea  w-full mt-2"
              placeholder="messsage"
            ></textarea>
            <div className="flex justify-center">
              <button type="submit" className="btn btn-primary mt-5 w-1/2">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div>
          <div>
            <p className=" text-3xl flex items-center text-primary">
              <FaRegEnvelope />
              <span className="ml-3 text-xl  text-white">
                ayakub1086@gmail.com
              </span>
            </p>

            <p className=" text-3xl flex items-center text-primary mt-2">
              <FaPhone />
              <span className="ml-3 text-xl  text-white">+8801518332675</span>
            </p>
          </div>
          <div className="flex items-center mt-5">
            <a
              target="_blank"
              href="https://github.com/ayakub"
              className="ml-5 text-3xl text-primary"
            >
              <FaGithub></FaGithub>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100077481652664"
              className="ml-5 text-3xl text-primary"
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/md-ayakub-ali-8bb089223/"
              className="ml-5 text-3xl text-primary"
            >
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>
        {/* mycontact */}
      </div>
    </div>
  );
};

export default Contact;
