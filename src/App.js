import "./App.css";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Home from "./components/Home";
import Special from "./components/Special";
import Story from "./components/Story";

function App() {
  return (
    <div className="App">
      <Head />
      <Home />
      <Special />
      <Story />
      <Footer />
    </div>
  );
}

export default App;
