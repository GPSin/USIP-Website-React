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
          <p className="text-lg">
            At USIP (Undergraduate Student Instrument Project), we turn
            curiosity into innovation. Our program equips undergraduates with
            hands-on experience in Auroral Research using ultralight, low-cost
            instruments deployed from the ground and via weather balloons.
            <br />
            <br />
            Now in its sixth campaign (USIP VI), USIP spans 9-12 credit hours
            and teaches vital skills like leadership, collaboration, research
            techniques, and time management. Students complete the program with
            a research paper, often serving as their thesis or senior project.
            <br />
            <br />
            USIP’s impact is clear: over 100 students have contributed to
            research presented at prestigious conferences(AGU, AHAC, AIAA, etc.)
            , with seven invited papers and one student-authored journal
            article. Our collaborations with initiatives like the Polar Aeronomy
            and Radio Science Summer School, HAARP Winter Campaign, and the
            Nationwide Eclipse Ballooning Project. As well as collaborations
            with universities like University of Fairbanks Alaska (UAF),
            including facilities as Poker Flat Research Range.
          </p>
        </div>

        <figure className="flex flex-col items-center sm:ml-auto mr-3">
          <img
            src="/images/USIP_V.JPG"
            alt="USIP Team"
            className="max-w-lg h-auto mb-2 sm:ml-auto mr-3"
          />
          <figure className="text-sm text-white text-opacity-70">
            <i>Alaska: USIP V Campaign</i>
          </figure>
        </figure>
      </div>
    </section>
  );
};

export default Organization;
