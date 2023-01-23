import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Home from "./components/Home";
import Featured from "./components/Featured";
import Story from "./components/Story";
import Variety from "./components/Variety";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/*import useSWR from 'swr'*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Head />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Featured />} />
          <Route path="/" element={<Story />} />
          <Route path="/" element={<Variety />} />
          <Route path="/" element={<Footer />} />
          <Route path="/checkout" element={<checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
