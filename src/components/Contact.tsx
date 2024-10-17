import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-start text-white p-4"
    >
      <img
        src="/images/Manager2024.jpg"
        alt=""
        className="max-w-lg h-auto mb-4 mr-5"
      />
      <div className="flex flex-col">
        <h2 className="text-3xl underline mb-3">Contact</h2>{" "}
        <p className="text-xl">
          <b>(Prof.)</b> Edgar Bering: <i>eabering@uh.edu</i>
          <br />
          <b>(Prof.)</b> Andrew Renshaw: <i>eabering@uh.edu</i>
          <br />
          <b>(Director)</b> Ryan Jochims: <i>rcjochim@cougarnet.uh.edu</i>
          <br />
          <b>(Science Lead)</b> Cessabella Astraquillo:{" "}
          <i>castraqu@cougarnet.uh.edu</i>
          <br />
          <b>(System Lead)</b> Mike Bastidas: <i>mjbastid@cougarnet.uh.edu</i>
        </p>{" "}
      </div>
    </section>
  );
};

export default Contact;
