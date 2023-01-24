import React, { useState, useEffect } from "react";
import Head from "./Head";
import Home from "./Home";
import Featured from "./Featured";
import Story from "./Story";
import Variety from "./Variety";
import Footer from "./Footer";

const Allcomponents = () => {
  return (
    <div>
      <Head />
      <Home />
      <Featured />
      <Story />
      {/*<Variety />*/}
      <Footer />
    </div>
  );
};

export default Allcomponents;
