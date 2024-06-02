import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./pases/contex/Navbar";
import AllContex from "./pases/contex/AllContext";
import Login from "./pases/Login";
import ProductDetails from "./pases/ProductDetails";

function App() {
  return (
    <>
      <Login />
      <ProductDetails/>
    </>
  );
}

export default App;
