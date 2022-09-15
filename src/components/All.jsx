import React from "react";
import PersistentDrawerLeft from "./Navbar/Navbar";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Order from "./Order/Order";
import Chart from "./Chart/Chart";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";

const All = (props) => {
  return (
    <BrowserRouter>
      <PersistentDrawerLeft />
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/settings" />
          <Route path="/chart" element={<Chart />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default All;
