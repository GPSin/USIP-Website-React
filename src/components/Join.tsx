import React from "react";

const Join: React.FC = () => {
  return (
    <section
      id="join"
      className="min-h-screen flex items-start items-center text-white p-4"
    >
      <div className="flex flex-col ml-4 mr-5">
        <h2 className="text-3xl underline mb-3">Join</h2>{" "}
        <p className="text-xl">This is the Join section content.</p>{" "}
      </div>
      <img
        src="/images/USIP_QR_CODE.png"
        alt="USIP Team"
        className="max-w-xl h-auto mb-5"
      />
    </section>
  );
};

export default Join;
