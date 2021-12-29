import React from "react";

const Realisations = () => {
  return (
    <div className="realisations" id="realisations">
      <p className="realisations__title">Mes réalisations</p>
      <div className="realisations__projectsContainer">
        <div className="realisations__projects" id="realisations__wwqProject">
          World Wild Quiz
        </div>
        <div
          className="realisations__projects"
          id="realisations__liveUpProject"
        >
          Live up
        </div>
        <div
          className="realisations__projects"
          id="realisations__luneticProject"
        >
          Lunetic
        </div>
      </div>
    </div>
  );
};

export default Realisations;
