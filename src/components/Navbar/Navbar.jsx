import React from "react";
import navImg from "../../assets/logo.png";
import coinImg from "../../assets/coin.png";

const Navbar = ({ availBalance }) => {
  return (
    <div class="navbar max-w-[1280px] mx-auto">
      <div className="flex-1">
        <a className="text-2xl">
          <img className="w-[60px] h-[60px]" src={navImg} alt="" />
        </a>
      </div>
      <div class="flex items-center">
        <span className="mr-2">{availBalance}</span>
        <span className="mr-2 ">$</span>
        <img className="w-[20px] has-[20px]:" src={coinImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
