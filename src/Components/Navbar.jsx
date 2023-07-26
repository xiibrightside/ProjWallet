/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar w-full h-[60px] flex flex-row justify-between items-center px-20">
      <div className="w-1/5 h-full flex justify-center items-center">
        <Link to="/">LoGo</Link>
      </div>
      <div className="w-2/5 h-full flex justify-center items-center gap-20">
        <Link to="/wallet">Wallet</Link>
        <Link to="/account">My Account</Link>
      </div>
    </div>
  );
};

export default Navbar;
