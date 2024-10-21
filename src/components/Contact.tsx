import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-start text-white p-4"
    >
      <figure className="text-center">
        <img
          src="/images/Manager2024.JPG"
          alt="Manager"
          className="max-w-lg h-auto mb-2 mr-5"
        />
        <figure className="text-sm text-white text-opacity-70">
          <i>Gakona, AK: PARs Aug. 2024 </i>
        </figure>
      </figure>
      <div className="flex flex-col">
        <h2 className="text-3xl underline mb-3">Contact</h2>

        <p className="text-xl mb-4">
          <b>(Prof.)</b> Edgar Bering:{" "}
          <a href="mailto:eabering@uh.edu" className="underline text-blue-500">
            <i>eabering@uh.edu</i>
          </a>
        </p>

        <p className="text-xl mb-4">
          <b>(Prof.)</b> Andrew Renshaw:{" "}
          <a href="mailto:eabering@uh.edu" className="underline text-blue-500">
            <i>eabering@uh.edu</i>
          </a>
        </p>

        <p className="text-xl mb-4">
          <b>(Director)</b> Ryan Jochims:{" "}
          <a
            href="mailto:rcjochim@cougarnet.uh.edu"
            className="underline text-blue-500"
          >
            <i>rcjochim@cougarnet.uh.edu</i>
          </a>
        </p>

        <p className="text-xl mb-4">
          <b>(System Lead)</b> Mike Bastidas:{" "}
          <a
            href="mailto:mjbastid@cougarnet.uh.edu"
            className="underline text-blue-500"
          >
            <i>mjbastid@cougarnet.uh.edu</i>
          </a>
        </p>

        <p className="text-xl mb-4">
          <b>(Science Lead)</b> Cessabella Astraquillo:{" "}
          <a
            href="mailto:castraqu@cougarnet.uh.edu"
            className="underline text-blue-500"
          >
            <i>castraqu@cougarnet.uh.edu</i>
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
