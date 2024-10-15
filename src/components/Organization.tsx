import React from "react";

const Organization: React.FC = () => {
  return (
    <section
      id="organization"
      className="min-h-screen flex items-start text-white p-4"
    >
      <div className="flex flex-col ml-4 mr-5">
        <h2 className="text-3xl underline mb-3">Organization</h2>{" "}
        <p className="text-xl">This is the Organization section content.</p>{" "}
      </div>
      <img
        src="/images/ASI_Image.png"
        alt="USIP Team"
        className="max-w-2xl h-auto mb-5"
      />
    </section>
  );
};

export default Organization;
