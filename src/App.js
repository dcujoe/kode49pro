import React from "react";
import "./App.css";
import checkout from "./components/checkout";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<checkout />} />
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
}

export default App;
