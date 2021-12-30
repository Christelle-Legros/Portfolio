import React from "react";
import linkedInLogo from "../assets/linkedIn.png";
import githubLogo from "../assets/github.png";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <p className="contact__title">Contact</p>

      <div className="contact__social">
        <p>Christelle Legros</p>
        <p>64480 USTARITZ</p>
        <p>&#x260E; 06 87 24 54 57</p>
        <br />
        <p>
          Pour m'écrire :<br />
          <a href="mailto:christelle.legros80@sfr.fr">
            <span className="mail">&#x1F4E7; christelle.legros80@sfr.fr</span>
          </a>
        </p>
      </div>
      <div className="contact__logos">
        <a
          href="https://www.linkedin.com/in/christelle-legros-b89885110/?originalSubdomain=fr"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedInLogo} alt="Logo LinkedIn" />
        </a>

        <a
          href="https://github.com/Christelle-Legros?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubLogo} alt="Logo Github" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
