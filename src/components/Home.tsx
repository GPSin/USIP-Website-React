import React, { useState } from "react";

const Home: React.FC = () => {
  const [isAlternate, setIsAlternate] = useState(false);

  const handleLogoClick = () => {
    setIsAlternate(!isAlternate);
  };

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-white text-center relative">
      <div
        className="absolute top-4 left-4 flex items-center cursor-pointer"
        onClick={handleLogoClick}
      >
        <img
          src={
            isAlternate
              ? "/images/Supreme_Lord_Bucee.png"
              : "/images/USIP_IV_Logo.png"
          }
          alt="Logo"
          className="w-20 h-20 mr-4"
        />
        <h2 className="text-3xl">{isAlternate ? "Lord Bucee" : "USIP"}</h2>
      </div>
      <div className="text-5xl mb-4">
        <h1>
          {isAlternate
            ? "ALL HAIL PARTY TIME BUCEE"
            : "Undergraduate Student Instrumentation Program"}
        </h1>
      </div>
      <nav className="top-4 right-4 absolute">
        <ul className="flex space-x-2 text-xl">
          <li className="nav-item">
            <button onClick={() => handleScroll("about")}>
              {isAlternate ? "PARTY TIME" : "About"}
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleScroll("experiments")}>
              {isAlternate ? "PARTY TIME" : "Experiments"}
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleScroll("organization")}>
              {isAlternate ? "PARTY TIME" : "Organization"}
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleScroll("donors")}>
              {isAlternate ? "PARTY TIME" : "Donors"}
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleScroll("contact")}>
              {isAlternate ? "PARTY TIME" : "Contact"}
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleScroll("join")}>
              {isAlternate ? "PARTY TIME" : "Join"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
