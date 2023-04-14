import React, { useState } from "react";
import { motion } from "framer-motion";

const NewNote = () => {
  const [data, setData] = useState({
    heading: "",
    msg: "",
  });

  let date = new Date();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({
      ...data,
      [name]: value,
      id: date,
    });
  };

  const handleAdd = () => {
    console.log(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, height: 0, x: -500 }}
      className="relative my-3 mr-3 border border-zinc-600 w-80 rounded-md ease-in-out shadow-xl shadow-black z-10"
    >
      <p
        layout="position"
        className="bg-zinc-600 rounded-t-md text-mainBlack text-center"
      >
        time
      </p>
      <p layout="position" className="p-2 text-2xl break-words">
        What are you Thinking?
      </p>
      <div className="p-2">
        <input
          value={data.heading}
          onChange={(e) => handleChange(e)}
          name="heading"
          placeholder="Heading..."
          className="w-full p-2 text-white rounded-md outline-none border border-zinci-600 bg-zinc-700"
        />
      </div>
      <div className="p-2">
        <textarea
          rows={5}
          name="msg"
          value={data.msg}
          onChange={(e) => handleChange(e)}
          placeholder="Message..."
          className="w-full p-2 text-white rounded-md outline-none border border-zinci-600 bg-zinc-700"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-row items-center text-md">
        <button
          onClick={() => handleAdd()}
          className="flex-1 bg-green-500 rounded-bl-[4px] py-2"
        >
          Add
        </button>
        <button className="flex-1 bg-red-600 rounded-br-[4px] py-2">
          Discard
        </button>
      </div>
    </motion.div>
  );
};

export default NewNote;
