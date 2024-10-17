import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-start text-white p-4 my-4"
    >
      <img
        src="/images/USIP_Team.jpg"
        alt="USIP Team"
        className="max-w-2xl h-auto mb-4 mr-4 self-start"
      />
      <div className="flex flex-col self-start">
        {" "}
        <h2 className="text-3xl underline mb-2">About</h2>{" "}
        <p className="text-lg">
          This course is an outcome of the 2015 NASA Science Mission Directorate
          (SMD) Undergraduate Student Instrument Project (USIP) Student Flight
          Research Opportunity competition that encouraged U.S. universities to
          offer undergraduate courses or clubs that build an Earth or space
          science payload that could fly on a suborbital vehicle, such as a
          sounding rocket, balloon, aircraft, or commercial suborbital reusable
          launch vehicles or provide related ground based observations.
          <br />
          <br />
          The College of Natural Sciences and Mathematics, the Cullen College of
          Engineering, the School of Technology, and The Honors College at UH
          are offering a two year program for credit to design and build ground
          instruments or balloon borne spacecraft to study the aurora borealis,
          the upper atmosphere, and earth science questions using ground-based
          sensors or multiple payloads on hand launched balloons.
        </p>{" "}
      </div>
    </section>
  );
};

export default About;
