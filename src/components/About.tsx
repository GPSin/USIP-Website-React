import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-start text-white p-4"
    >
      <img
        src="/images/USIP_Team.jpg"
        alt="USIP Team"
        className="max-w-2xl h-auto mb-4 mr-5"
      />
      <div className="flex flex-col">
        <h2 className="text-3xl underline mb-3">About</h2>{" "}
        <p className="text-xl">This is the About section content.</p>{" "}
      </div>
    </section>
  );
};

export default About;
