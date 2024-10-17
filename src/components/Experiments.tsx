import React, { useState } from "react";

const Experiments: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleImageClick = (message: string) => {
    setPopupMessage(message);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  };

  return (
    <section id="experiments" className="min-h-screen text-white p-4 my-4">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl underline mb-3">Experiments</h2>
        <p className="text-xl text-center">
          This is the Experiments section content.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          {
            src: "/images/ASI_Image.png",
            alt: "All-Sky Imager (ASI)",
            message: "Details about Experiment 1.",
            caption: "All-Sky Imager (ASI)",
          },
          {
            src: "/images/TEC_Team.png",
            alt: "Total Electron Count (TEC)",
            message: "Details about Experiment 2.",
            caption: "Total Electron Count (TEC)",
          },
          {
            src: "/images/pic01.jpg",
            alt: "Guided Fall",
            message: "Details about Experiment 3.",
            caption: "Guided Fall",
          },
          {
            src: "/images/Microplastics_Team.png",
            alt: "Microplastics",
            message: "Details about Experiment 4.",
            caption: "Microplastics",
          },
          {
            src: "/images/Conductivity_Team.png",
            alt: "Conductivity",
            message: "Details about Experiment 5.",
            caption: "Conductivity",
          },
          {
            src: "/images/VLF_Team.png",
            alt: "Very Low Frequencies (VLF)",
            message: "Details about Experiment 6.",
            caption: "Very Low Frequencies (VLF)",
          },
        ].map((experiment, index) => (
          <div key={index} className="relative group">
            <img
              src={experiment.src}
              alt={experiment.alt}
              className="w-full h-48 object-cover rounded-lg cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
              onClick={() => handleImageClick(experiment.message)}
            />
            <p className="text-center text-white mt-2">{experiment.caption}</p>
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          onClick={handleBackdropClick}
        >
          <div className="bg-black bg-opacity-90 rounded-lg p-10 text-center">
            <h2 className="text-xl text-white mb-4">{popupMessage}</h2>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experiments;
