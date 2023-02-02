import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import Home from "./Home";

const Body = () => {
  return (
    <div className="border w-full">
      <Header />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default Body;
