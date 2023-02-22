import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assests/logo.png";
import "../../Home/Home/cardBackground.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 card-color  text-white">
        <div>
          <img style={{ width: "100px" }} src={logo} alt="" />
          <p>
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <div className="text-center card-color text-white pb-5">
        <p>Copyright © 2023 - Random Car All Right reserved </p>
      </div>
    </div>
  );
};

export default Footer;
