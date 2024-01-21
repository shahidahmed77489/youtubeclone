import React from "react";

const SideBar = ({ icon, list, network, color }) => {
  return (
    <div>
      <ul className="list-none">
        <li className="flex items-center my-3 gap-3">
          <span className={`w-[30px] text-${color}`}>{icon}</span>
          <span>{list}</span>
          <span className="text-red-500">{network}</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
