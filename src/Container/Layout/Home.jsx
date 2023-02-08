import React, { useState } from "react";
import Thoughts from "../Components/Thoughts";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const [isAdd, setIsAdd] = useState(false);
  const handleAddData = () => {
    setIsAdd(!isAdd);
  };

  return (
    <div className="p-5 overflow-hidden">
      <div className="flex flex-row justify-between items-center border border-x-0 border-t-0 py-2 border-zinc-500">
        <div>
          <h1 className="bg-crimson rounded-full px-4 py-1">Your Thoughts</h1>
        </div>

        <button
          onClick={() => handleAddData()}
          className={`bg-teal font-semibold text-mainBlack rounded-full flex flex-row items-center z-20 ${
            isAdd ? "rotate-45" : "pr-3 pl-1"
          }`}
        >
          <motion.img
            whileHover={{
              rotate: isAdd ? 45 : 0,
            }}
            transition={{
              type: "tween",
              duration: 0.1,
            }}
            className={`transition-transform ${
              isAdd ? "rotate-45 w-11" : "w-[35px]"
            }`}
            src={require("../../Assets/plus.svg").default}
            alt=""
          />
          {!isAdd && <span>New Note</span>}
        </button>
      </div>

      <Thoughts isAdd={isAdd} />
      {isAdd && (
        <div
          onClick={() => handleAddData()}
          className="absolute w-full h-full top-0 left-0 backdrop-blur-sm z-0"
        ></div>
      )}
    </div>
  );
};

export default Home;
