import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-start text-white p-4 bg-black bg-opacity-20"
    >
      <img
        src="/images/Manager2024.jpg"
        alt="USIP Team"
        className="max-w-lg h-auto mb-4 mr-5"
      />
      <div className="flex flex-col">
        <h2 className="text-3xl underline mb-3">Contact</h2>{" "}
        <p className="text-xl">This is the Contact section content.</p>{" "}
      </div>
    </section>
  );
};

export default Contact;
