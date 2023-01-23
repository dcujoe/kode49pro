import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Featured from "./components/Featured";
import Story from "./components/Story";
import Variety from "./components/Variety";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
      <Featured />
      <Story />
      <Variety />
      <Footer />
    </div>
  );
}

export default App;

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Checkout" element={<Checkout />} />
    <Route path="/Login" element={<Login />} />
  </Routes>
</BrowserRouter>;
