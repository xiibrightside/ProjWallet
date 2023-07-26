/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components";
import { Account, Homepage, Wallet, Profile, Config } from "./Pages";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="account" element={<Account />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="config" element={<Config />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
