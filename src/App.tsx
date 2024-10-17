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
    <div className="snap-container">
      <div className="snap-section">
        <Home />
      </div>
      <div className="snap-section">
        <About />
      </div>
      <div className="snap-section">
        <Experiments />
      </div>
      <div className="snap-section">
        <Organization />
      </div>
      <div className="snap-section">
        <Donors />
      </div>
      <div className="snap-section">
        <Contact />
      </div>
      <div className="snap-section">
        <Join />
      </div>
    </div>
  );
};

export default App;
