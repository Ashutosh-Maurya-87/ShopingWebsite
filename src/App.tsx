import React from "react";
import "./App.css";
import { Navbar } from "./component/shoping/Navbar";
import Product from "./component/shoping/Product";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Product />
    </>
  );
};

export default App;
