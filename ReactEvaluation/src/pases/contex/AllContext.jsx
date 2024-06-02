import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home";
import Login from "../Login";
import ProductDetails from "../ProductDetails";
import Logout from "../Logout";


export default function AllContex() {
  return (
    <>
      <Routes>
        <Route to="/login" path={<Login />} />
      </Routes>
      <Routes>
        <Route to="/" path={<Home />} />
      </Routes>

      <Routes>
        <Route to="/product" path={<ProductDetails />} />
      </Routes>

      <Routes>
        <Route to="/loout" path={<Logout />} />
      </Routes>
    </>
  );
}
