import React from "react";
import cvVisuel from "../assets/cvVisuel21.png";
import cv from "../assets/cv_2021.pdf";

const About = () => {
  return (
    <div className="about" id="about">
      <p className="about__title">Qui suis-je ?</p>
      <div className="about__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam deserunt
        officia nam, voluptatibus temporibus ad, explicabo corrupti sint, totam
        alias iure veritatis repellat debitis pariatur doloremque adipisci sed
        necessitatibus exercitationem sunt numquam? Odit obcaecati eveniet,
        dicta adipisci quo suscipit facilis autem asperiores, ducimus, deserunt
        amet modi et minima maxime? Magnam, alias nihil amet quasi quis
        explicabo facere nobis provident, enim obcaecati vel accusamus
        accusantium hic illum quibusdam ducimus maiores est! Officiis
        accusantium facilis ullam pariatur porro cumque iure necessitatibus
        labore?
        <p>Les technologies que j'utilise : ....</p>
        <p>
          Mais bien évidemment, je suis prête à travailler sur toute nouvelle
          technologie !
        </p>
      </div>
      <div className="about__cvVisuel">
        <a href={cv} target="_blank" rel="noreferrer">
          <img src={cvVisuel} alt="Visuel du cv" />
        </a>
      </div>
    </div>
  );
};

export default About;
