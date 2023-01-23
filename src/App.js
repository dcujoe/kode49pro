import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Home from "./components/Home";
import Featured from "./components/Featured";
import Story from "./components/Story";
import Variety from "./components/Variety";
/*import useSWR from 'swr'*/

function App() {
  return (
    <div className="App">
      <Head />
      <Home />
      <Featured />
      <Story />
      <Variety />
      <Footer />
    </div>
  );
}

export default App;
