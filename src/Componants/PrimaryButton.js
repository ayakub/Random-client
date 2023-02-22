import React from "react";

const primaryButton = ({ children }) => {
  return (
    <button className="btn btn-primary text-white w-full">{children}</button>
  );
};

export default primaryButton;
