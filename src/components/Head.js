import React from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow">
      <div className="flex col-span-1 cursor-pointer">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-12 mt-1 "
          alt="menu"
          src="https://icon-library.com/images/svg-hamburger-icon/svg-hamburger-icon-11.jpg"
        />
        <a href="/">
          <img
            className="h-14 flex items-center"
            alt="youtube logo"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 py-2 ">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full p-1"
          type="text"
        />
        <button className="border border-gray-400 bg-gray-100 rounded-r-full px-5 py-1">
          🔍
        </button>
      </div>
      <div className="col-span-1 py-1">
        <img
          className="h-10"
          alt="user"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
        />
      </div>
    </div>
  );
};

export default Head;
