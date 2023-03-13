import React from "react";
import Marquee from "react-fast-marquee";
import bmw from "../../../assests/client logo/bmw.png";
import toyota from "../../../assests/client logo/toyota.jpg";
import hundai from "../../../assests/client logo/hundai.jpg";
import mitshubishi from "../../../assests/client logo/mitsshibishi.png";
import audi from "../../../assests/client logo/audi.png";
import suzuki from "../../../assests/client logo/suzuki.png";
import tesla from "../../../assests/client logo/teska.jpg";
import ferrari from "../../../assests/client logo/ferraei.png";
import rangerover from "../../../assests/client logo/rangerover.jpg";

const WeAreClients = () => {
  const clientsLogo = [
    {
      id: 1,
      image: bmw,
    },
    {
      id: 2,
      image: toyota,
    },
    {
      id: 3,
      image: hundai,
    },
    {
      id: 4,
      image: mitshubishi,
    },
    {
      id: 5,
      image: audi,
    },
    {
      id: 6,
      image: tesla,
    },
    {
      id: 7,
      image: suzuki,
    },
    {
      id: 8,
      image: ferrari,
    },
    {
      id: 8,
      image: rangerover,
    },
  ];
  return (
    <Marquee>
      <div className="flex flex-row">
        {clientsLogo?.map((logo) => (
          <img
            className="mx-5"
            style={{ width: "250px" }}
            src={logo?.image}
            alt=""
          />
        ))}
      </div>
    </Marquee>
  );
};

export default WeAreClients;
