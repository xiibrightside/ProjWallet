import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";

const Account = () => {
  return (
    <div>
      My Account
      <div className="flex flex-col gap-5">
        <Link to="/account/profile">Profile</Link>
        <Link to="/account/config">Config</Link>
        <Outlet />
      </div>
    </div>
  );
};

export default Account;
