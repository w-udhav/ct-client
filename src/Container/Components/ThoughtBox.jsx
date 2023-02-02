import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const ThoughtBox = () => {
  const [state, setState] = useState(false);
  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.3, type: "spring" } }}
      onClick={() => setState(!state)}
      className={`border border-zinc-600 w-56 rounded-md  ease-in-out shadow-xl overflow-hidden ${
        state ? "shadow-black " : "hover:border-b-crimson hover:border-b-4"
      }`}
    >
      <motion.p
        layout="position"
        className="bg-zinc-600 rounded-t-md text-mainBlack text-center"
      >
        time
      </motion.p>
      <motion.p layout="position" className="p-2 text-2xl break-words">
        Heading
      </motion.p>
      {state && (
        <motion.div
          layout="position"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rem
            totam soluta dolore. Rerum vitae at reprehenderit soluta voluptatum
            excepturi esse dicta necessitatibus culpa corporis! A explicabo
            culpa similique minus.
          </p>
          <div className="bg-crimson p-2 flex justify-center space-x-2">
            <button>copy</button>
            <button> delete </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ThoughtBox;
