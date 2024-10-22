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
    <div className="h-screen flex flex-col items-center justify-center text-white text-center relative p-4">
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
          className="w-16 h-16 sm:w-20 sm:h-20 mr-4"
        />
        <h2 className="text-2xl sm:text-3xl">
          {isAlternate ? "Lord Bucee" : "USIP"}
        </h2>
      </div>
      <div className="text-3xl sm:text-5xl mb-4">
        <h1>
          {isAlternate
            ? "ALL HAIL PARTY TIME BUCEE"
            : "Undergraduate Student Instrumentation Program"}
        </h1>
      </div>
      <nav className="absolute top-4 right-4 sm:right-8">
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-lg sm:text-xl">
          {[
            "about",
            "experiments",
            "organization",
            "donors",
            "contact",
            "join",
          ].map((section, index) => (
            <li className="nav-item" key={index}>
              <button onClick={() => handleScroll(section)}>
                {isAlternate
                  ? "PARTY TIME"
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
