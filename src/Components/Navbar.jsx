import React from "react";

const Navbar = () => {
  return (
    <ul className="md:flex hidden justify-center gap-5 my-2 flex-wrap">
      <li className="bg-redd  text-white px-4 rounded py-1.2">All</li>
      <li className="bg-redd  text-white px-4 rounded py-1.2">Mixes</li>
      <li className="bg-redd  text-white px-4 rounded py-1.2">Music</li>
      <li className="bg-redd  text-white px-4 rounded py-1.2">Filmy</li>
      <li className="bg-redd  text-white px-4 rounded py-1.2">Ghazal</li>
      <li className="bg-redd  text-white px-4 rounded py-1.2">Live</li>
      <li className="bg-redd  text-white px-4 rounded py-1.2">
        Recently Uploaded
      </li>
      <li className="bg-redd  text-white px-4 rounded py-1.2">Watched</li>
      <li className="bg-redd  text-white px-4 rounded py-1.2">News</li>
      <li className="bg-redd  text-white px-4 rounded py-1.2">Anime</li>
    </ul>
  );
};

export default Navbar;
