import React from "react";

const Home: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white text-center">
      <h1 className="text-6xl font-bold logo">USIP</h1>
      <nav className="top-4 right-4 fixed">
        <ul className="flex space-x-2 text-x1">
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
