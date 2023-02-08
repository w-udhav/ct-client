import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="px-4 sticky top-0 h-screen bg-[#161616] rounded--[20px] shadow-lg">
      <div className="flex flex-col items-center justify-between h-full py-5">
        <div>Udhav W.</div>
        <div className="flex flex-col space-y-2">
          <Link to="/" className="px-4 py-2 rounded-md bg-teal text-center">
            Home
          </Link>
          <Link to="/" className="px-4 py-2 rounded-md bg-teal text-center">
            Story
          </Link>
        </div>
        <div>
          <button className="w-28 py-2 bg-red-600 bg-opacity-50 hover:bg-opacity-100 transition-all rounded-md">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
