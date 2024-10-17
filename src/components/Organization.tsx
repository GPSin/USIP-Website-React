import React from "react";

const Organization: React.FC = () => {
  return (
    <section
      id="organization"
      className="min-h-screen flex items-start text-white p-4 my-8"
    >
      <div className="flex flex-col sm:flex-row items-start w-full">
        <div className="flex flex-col items-center w-full sm:w-1/2 text-center">
          <h2 className="text-3xl underline mb-3">Organization</h2>
          <p className="text-xl">This is the Organization section content.</p>
        </div>

        <img
          src="/images/Manager2024.JPG"
          alt="USIP Team"
          className="max-w-lg h-auto mb-5 sm:ml-auto mr-3"
        />
      </div>
    </section>
  );
};

export default Organization;
