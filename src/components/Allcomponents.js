import React, { useState, useEffect } from "react";
import Head from "./Head";
import Home from "./Home";
import Featured from "./Featured";
import Story from "./Story";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Allcomponents = () => {
  return (
    <div>
      <Head />
      <Home />
      <Featured />
      <Story />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Allcomponents;
