import React from "react";
import Header from "../Components/Header";
import Home from "./Home";

const Body = () => {
  return (
    <div className="border h-full w-full">
      <Header />
      <div className="">
        <Home />
      </div>
    </div>
  );
};

export default Body;
