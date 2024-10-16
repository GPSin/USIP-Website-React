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
    // Close the modal when clicking outside of the modal content
    if (event.target === event.currentTarget) {
      closePopup();
    }
  };

  return (
    <section
      id="experiments"
      className="min-h-screen text-white p-4 bg-black bg-opacity-20"
    >
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
            alt: "Experiment 1",
            message: "Details about Experiment 1.",
          },
          {
            src: "/images/pic01.jpg",
            alt: "Experiment 2",
            message: "Details about Experiment 2.",
          },
          {
            src: "/images/pic01.jpg",
            alt: "Experiment 3",
            message: "Details about Experiment 3.",
          },
          {
            src: "/images/pic01.jpg",
            alt: "Experiment 4",
            message: "Details about Experiment 4.",
          },
          {
            src: "/images/pic01.jpg",
            alt: "Experiment 5",
            message: "Details about Experiment 5.",
          },
        ].map((experiment, index) => (
          <div key={index} className="relative group">
            <img
              src={experiment.src}
              alt={experiment.alt}
              className="w-full h-48 object-cover rounded-lg cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
              onClick={() => handleImageClick(experiment.message)}
            />
          </div>
        ))}
      </div>

      {}
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
