import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import NewNote from "./NewNote";
import ThoughtBox from "./ThoughtBox";

let intialData = [
  { id: 0, name: "Marta Colvin Andrade", date: "January" },
  { id: 1, name: "How are you Doing?", date: "January" },
  { id: 2, name: "Louise Nevelson", date: "January" },
  { id: 3, name: "Louise Nevelson", date: "January" },
  { id: 4, name: "Louise Nevelson", date: "Februray" },
  { id: 5, name: "Louise Nevelson", date: "January" },
  { id: 6, name: "Louise Nevelson", date: "Februray" },
  { id: 7, name: "Louise Nevelson", date: "Februray" },
  { id: 8, name: "Louise Nevelson", date: "January" },
];

const Thoughts = ({ isAdd }) => {
  const [data, setState] = useState(intialData);

  function handleClick() {}
  return (
    <div>
      <div className="flex w-full flex-wrap items-start ">
        <AnimatePresence mode="popLayout">
          {isAdd && <NewNote />}
        </AnimatePresence>
        {data.map((thought) => {
          return <ThoughtBox key={thought.id} data={thought} />;
        })}
      </div>
    </div>
  );
};

export default Thoughts;
