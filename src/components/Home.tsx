import React from "react";

const Home: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white text-center relative bg-black bg-opacity-20">
      <div className="absolute top-4 left-4 flex items-center">
        <img
          src="/images/USIP_IV_Logo.png"
          alt="USIP Logo"
          className="w-16 h-16 mr-4"
        />
        <h2 className="text-3xl">USIP</h2>
      </div>
      <div className="text-5xl">
        <h1>Undergraduate Student Instrumentation Program</h1>
      </div>
      <nav className="top-4 right-4 fixed">
        <ul className="flex space-x-2 text-2xl">
          <li className="cursor-pointer hover:underline text-lg p-2">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer hover:underline text-lg p-2">
            <a href="#experiments">Experiments</a>
          </li>
          <li className="cursor-pointer hover:underline text-lg p-2">
            <a href="#organization">Organization</a>
          </li>
          <li className="cursor-pointer hover:underline text-lg p-2">
            <a href="#donors">Donors</a>
          </li>
          <li className="cursor-pointer hover:underline text-lg p-2">
            <a href="#contact">Contact</a>
          </li>
          <li className="cursor-pointer hover:underline text-lg p-2">
            <a href="#join">Join</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
