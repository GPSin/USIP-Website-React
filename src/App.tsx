import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Experiments from "./components/Experiments";
import Organization from "./components/Organization";
import Donors from "./components/Donors";
import Contact from "./components/Contact";
import Join from "./components/Join";

const App: React.FC = () => {
  return (
    <div>
      <Home />
      <About />
      <Experiments />
      <Organization />
      <Donors />
      <Contact />
      <Join />
    </div>
  );
};

export default App;
