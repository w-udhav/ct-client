import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import NewNote from "./NewNote";
import ThoughtBox from "./ThoughtBox";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

let intialData = [
  { id: 0, name: "Marta Colvin Andrade", date: "January" },
  { id: 1, name: "How are you Doing?", date: "January" },
  { id: 2, name: "Louise Nevelson", date: "January" },
  { id: 3, name: "Louise Nevelson", date: "January" },
  { id: 4, name: "Louise Nevelson", date: "Februray" },
  { id: 5, name: "Louise Nevelson", date: "January" },
  { id: 6, name: "Louise Nevelson", date: "Februray" },
  { id: 7, name: "Louise Nevelson", date: "Februray" },
];

const Thoughts = ({ isAdd }) => {
  const [data, setState] = useState(intialData);

  function handleClick() {}
  return (
    <div className="py-2">
      <div className="w-full">
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 1,
            750: 2,
            900: 4,
            1024: 5,
          }}
        >
          <AnimatePresence mode="popLayout">
            {isAdd && <NewNote />}
          </AnimatePresence>
          <Masonry gutter="10px">
            {data.map((thought) => {
              return (
                <div className="box">
                  <ThoughtBox key={thought.id} data={thought} />
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Thoughts;
