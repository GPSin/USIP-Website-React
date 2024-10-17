import React from "react";

const Join: React.FC = () => {
  return (
    <section
      id="join"
      className="min-h-screen flex flex-col items-center justify-center text-white p-4"
    >
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl underline mb-3">Join Here</h2>
        <img
          src="/images/USIP_QR_CODE.png"
          alt="USIP QR Code"
          className="max-w-md h-auto"
        />
      </div>
    </section>
  );
};

export default Join;
