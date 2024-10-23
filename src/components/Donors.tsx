import React from "react";

const Donors: React.FC = () => {
  return (
    <section
      id="donors"
      className="min-h-screen flex flex-col items-center justify-start text-white p-4"
    >
      <h2 className="text-3xl underline mb-5">Donors</h2>

      <p className="text-xl text-center max-w-4xl mb-8">
        Funding for the USIP program was provided by NASA Grants NNX13AR57G and NNX16AK65A. Additional funds were provided by
        several University of Houston offices, including Office of the Provost, Division of Research, Cullen College of Engineering,
        Department of Physics, College of Natural Sciences and Mathematics, and College of Technology. We also received substantial
        support from several generous donors. Private donors include Drs. Andrew Askew, Edgar Bering, Carolyn Farb, Ben Longmier, and Phil
        Inderwiesen; John Guthery, Barbara Clark, Rachel Gamblin, and Pat Tovsen. Thank you, everyone!
        <br />
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap 2 justify-items-center text-xl">
        <li className="text-center">Gurpreet Singh</li>
        <li className="text-center">Mike Bastidas</li>
        <li className="text-center">Ryan Jochims</li>
        <li className="text-center">Jasonnnnnnnnnnnnnnn</li>
        <li className="text-center">Zeel Engineer</li>
      </ul>
    </section>
  );
};

export default Donors;
