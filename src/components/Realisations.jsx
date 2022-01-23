import React from "react";
import WwqVisuel from "../assets/WwqVisuel.png";
import LiveUpVisuel from "../assets/LiveUpVisuel.png";
import LuneticVisuel from "../assets/LuneticVisuel.png";

const Realisations = () => {
  return (
    <div className="realisations" id="realisations">
      <p className="realisations__title">Mes réalisations</p>
      <div className="realisations__projectsContainer">
        <div className="realisations__projects" id="realisations__wwqProject">
          <a
            href="https://christelle-legros.github.io/WorldWildQuiz/#/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={WwqVisuel} alt="Screenshot World Wild Quiz" />

            <p>
              Projet 2 Wild Code School : création d'un quiz et d'un memory avec
              ReactJs en faisant appel à une API.
            </p>
          </a>
        </div>

        <div
          className="realisations__projects"
          id="realisations__liveUpProject"
        >
          <a
            href="https://christelle-legros.github.io/Liveup/#/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LiveUpVisuel} alt="Screenshot Live Up" />
            <p>
              Hackaton 30h environ : création d'un site fullstack avec : ReactJs
              pour le front, Express pour le back et MySql pour la bdd.
            </p>
          </a>
        </div>

        <div className="realisations__projects" id="luneticProject">
          <img src={LuneticVisuel} alt="Screenshot Lunetic" />
          <p>
            Projet en cours pour un vrai client : création d'un site fullstack
            avec utilisation de ReactJs, Typescript, Express, MySql, Sass.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Realisations;
