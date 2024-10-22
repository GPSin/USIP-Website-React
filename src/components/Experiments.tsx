import React, { useState } from "react";

const Experiments: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState<React.ReactNode>("");

  const handleImageClick = (message: React.ReactNode) => {
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
    <section id="experiments" className="min-h-screen text-white p-4">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl underline mb-3">Experiments</h2>
        <p className="text-xl text-center">
          Current conducting projects of USIP VI
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          {
            src: "/images/ASI_Image.png",
            alt: "All-Sky Imager (ASI)",
            message: (
              <>
                <h2 className="text-2xl">
                  {" "}
                  <b>ASI</b>
                </h2>
                <p className="mt-2">
                  ASI involves a custom-built camera equipped with a fisheye
                  lens that captures a 180-degree field of view (FOV) to detect
                  airglow, the subtle luminescence of our atmosphere resulting
                  from the interaction of air molecules with sunlight. This
                  camera utilizes seven narrowband filters ranging from 500 to
                  705 nm to effectively observe airglow. We are advancing the
                  design by creating a fully autonomous system capable of
                  selectively determining areas in the sky where airglow occurs,
                  utilizing trained neural network processing for enhanced
                  decision-making. Additionally, the camera will feature a
                  secondary camera, with higher resolution, enabling better
                  observation of airglow behavior to gather gravitational wave
                  data.
                </p>
              </>
            ),
            caption: "All-Sky Imager (ASI)",
          },
          {
            src: "/images/TEC_Team.png",
            alt: "Total Electron Count (TEC)",
            message: (
              <>
                <h2 className="text-2xl">
                  {" "}
                  <b>TEC</b>
                </h2>
                <p className="mt-2">
                  TEC measures the number of electrons in a column of the
                  ionosphere, offering insights into ionospheric conditions
                  influenced by solar activity and location. In this study,
                  using the Trimble NetR9 GNSS Reference Receiver near
                  Fairbanks, Alaska, we aim to determine how TEC fluctuates,
                  particularly during periods of high solar activity
                </p>
              </>
            ),
            caption: "Total Electron Count (TEC)",
          },
          {
            src: "/images/GuidedFall_Team.jpg",
            alt: "Guided Fall",
            message: (
              <>
                <h2 className="text-2xl">
                  {" "}
                  <b>Guided Fall</b>
                </h2>
                <p className="mt-2">
                  Guided is focused on developing a reliable system to guide a
                  descending high-altitude balloon payload to a pre-selected
                  location for recovery. It is designed to monitor the balloon’s
                  ascent and automatically separate the payload at a
                  predetermined altitude or location. From at least 25 km in
                  altitude, the payload will descend to land within 50 meters of
                  the designated recovery site. Choosing from multiple
                  pre-selected landing locations based on the flight profile
                  and, if time allows, could receive updated landing points from
                  ground stations during flight. The system will also be capable
                  of handling payloads of at least 6 lbs.
                </p>
              </>
            ),
            caption: "Guided Fall",
          },
          {
            src: "/images/Microplastics_Team.png",
            alt: "Microplastics",
            message: (
              <>
                <h2 className="text-2xl">
                  {" "}
                  <b>Microplastics</b>
                </h2>
                <p className="mt-2">
                  Microplastics aims to collect and identify microplastics and
                  extremophile organisms present in the atmosphere at altitudes
                  between 15 and 30 km, enhancing our understanding of the
                  atmosphere's role in the global distribution of microplastics
                  and the presence of microbial life at high latitudes. Using
                  filters flown on high-altitude balloons, samples will be
                  analyzed through Raman microscopy and DNA sequencing.
                  Microplastics, defined as plastics or synthetic fibers smaller
                  than 5 mm, pose significant threats to wildlife and human
                  health, yet their distribution patterns are poorly documented.
                  Additionally, the diversity of microbial life in the
                  stratosphere at high latitudes remains underexplored, with
                  limited data on the deposition of microplastics in both rural
                  and urban areas. We expect to measure microplastics of 10 μm
                  and larger, determine their composition via Raman microscopy,
                  and assess the concentration of microorganisms present in the
                  stratosphere. Samples collected will be processed in a DNA
                  extraction solution for sequencing to identify the organisms
                  present.
                </p>
              </>
            ),
            caption: "Microplastics",
          },
          {
            src: "/images/Conductivity_Team.png",
            alt: "Conductivity",
            message: (
              <>
                <h2 className="text-2xl">
                  {" "}
                  <b>Conductivity</b>
                </h2>
                <p className="mt-2">
                  Conductivity aims to expand the global pool of atmospheric
                  conductivity data, investigate potential causes of short-term
                  conductivity variations, and develop a low-cost system that
                  encourages others to collect their own data. The mission
                  requirements include measuring conductivity during both
                  vertical and horizontal movements in the ionosphere,
                  specifically at altitudes of 10-30 km above ground.
                  Conductivity data will be plotted and compared against
                  environmental conditions such as temperature, pressure, and
                  magnetic field strength. We expect to observe conductivity
                  values ranging from 10<sup>-13</sup> to 10<sup>-10</sup> ohm⁻¹
                  m⁻¹, with short-term variations similar to previous research
                  findings, potentially showing up to 20 times the expected
                  conductivity. Higher conductivity values are anticipated
                  closer to the poles, indicating greater values in Fairbanks
                  compared to locations like Texas.
                </p>
              </>
            ),
            caption: "Conductivity",
          },
          {
            src: "/images/VLF_Team.png",
            alt: "Very Low Frequencies (VLF)",
            message: (
              <>
                <h2 className="text-2xl">
                  {" "}
                  <b>VLF</b>
                </h2>
                <p className="mt-2">Very Low Frequencies (VLF)</p>
              </>
            ),
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
