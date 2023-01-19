import React from 'react';
import "./App.css";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Home from "./components/Home";
import Special from "./components/Special";
import Story from "./components/Story";
import Variety from './components/Variety';
/*import useSWR from 'swr'*/

function App() {

/*const fetcher = (...args) => fetch(...args).then(res => res.json())
const { data, error, isLoading } = useSWR('', fetcher)

  if (error) {
    return <div>failed to load</div>
}
   else if(isLoading){  
    return <div>loading...</div>}
  else {
  <div>hello {data.name}!</div>} */


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