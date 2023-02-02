import React from "react";

const Sidebar = () => {
  return (
    <div className="border w-44 sticky top-0 h-screen">
      <div className="flex flex-col items-center justify-between h-full">
        <div>Logo</div>
        <div>Routes</div>
        <div>Logout</div>
      </div>
    </div>
  );
};

export default Sidebar;
