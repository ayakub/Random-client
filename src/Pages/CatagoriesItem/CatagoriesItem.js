import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contex/AuthProvidor";
import Catagory from "./Catagory";
import Modal from "./Modal";
import "../Home/Home/cardBackground.css";

const CatagoriesItem = () => {
  const [allusers, setAlluser] = useState({});
  const { modalData } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://reused-product-sell-server-ayakub.vercel.app/usersAll")
      .then((res) => res.json())
      .then((data) => setAlluser(data));
  }, []);
  const catagoryitems = useLoaderData();
  return (
    <div>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-20 background-color">
        {catagoryitems?.map((items) => (
          <Catagory
            key={items._id}
            items={items}
            allusers={allusers}
          ></Catagory>
        ))}
      </div>
      <div>{modalData && <Modal></Modal>}</div>
    </div>
  );
};

export default CatagoriesItem;
