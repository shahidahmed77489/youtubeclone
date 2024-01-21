import React, { useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { BiVideoPlus } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { fetchSearchVideo } from "../Utils/searchSlice";
import { useDispatch } from "react-redux";
import { showvalue } from "../Utils/sidemenuSlice";

const Header = () => {
  const refContent = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const homeBtn = () => {
    navigate("/");
  };
  const menuBtn = () => {
    dispatch(showvalue());
  };
  const searchVideoesBtn = () => {
    const searchTerm = refContent.current.value;
    dispatch(fetchSearchVideo(searchTerm));
    navigate("/searchMovie");
  };
  return (
    <div className="md:flex items-center justify-between mt-2 px-10 py-2">
      <div className="flex justify-between items-center gap-4">
        <div className="text-2xl " onClick={menuBtn}>
          <FiMenu />
        </div>
        <div
          className="flex items-center cursor-pointer text-2xl"
          onClick={homeBtn}
        >
          <div className="text-redd text-3xl mt-1">
            <FaYoutube />
          </div>
          <div>
            <h2 className="font-semibold">
              YouTube <sup className="text-gray-300 text-[1rem]">In</sup>
            </h2>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full my-2  flex mx-auto">
        <input
          type="text"
          ref={refContent}
          placeholder="Search..."
          className="border  border-solid w-full  rounded-bl-full px-6 py-1 outline-sky-500"
        />
        <button
          className="border border-solid px-4 hover:text-sky-500  text-2xl rounded-br-full rounded-tr-full"
          onClick={searchVideoesBtn}
        >
          <IoSearch />
        </button>
      </div>
      <div className="md:flex hidden text-2xl gap-5 relative">
        <div>
          <BiVideoPlus />
        </div>
        <div className="relative">
          <FaRegBell />
          <span className="absolute bg-redd bottom-2 text-white p-1 text-[13px] leading-none left-3 rounded-full ">
            9+
          </span>
        </div>
        <div>
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default Header;
