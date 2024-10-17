import React from "react";

const Donors: React.FC = () => {
  return (
    <section
      id="donors"
      className="min-h-screen flex flex-col items-center justify-start text-white p-4"
    >
      <h2 className="text-3xl underline mb-5">Donors</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center text-xl">
        <li className="text-center">Gurpreet Singh</li>
        <li className="text-center">Mike Bastidas</li>
        <li className="text-center">Ryan Jochims</li>
        <li className="text-center">Jason IDK how to spell his last name</li>
        <li className="text-center">Zeel Engineer</li>
      </ul>
    </section>
  );
};

export default Donors;
