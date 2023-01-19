import React from 'react';
import "./App.css";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Home from "./components/Home";
import Special from "./components/Special";
import Story from "./components/Story";
import Variety from './components/Variety';

function App() {
    return ( 
        <div className = "App" >
        <Home />
        <Head />
        <Special />
        <Story />
        <Variety />
        <Footer />
        </div>
       
    );
}

export default App;