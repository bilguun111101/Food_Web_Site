import React from "react";
import PersistentDrawerLeft from "./Navbar/Navbar";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Order from "./Order/Order";
import Chart from "./Chart/Chart";

const All = (props) => {
  return (
    <BrowserRouter>
      <PersistentDrawerLeft />
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/settings" />
          <Route path="/chart" element={<Chart />}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default All;
