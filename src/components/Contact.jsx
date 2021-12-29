import React from "react";
import linkedInLogo from "../assets/linkedIn.png";
import githubLogo from "../assets/github.png";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <p className="contact__title">Contact</p>
      <div className="contact__form">
        <input type="text" value="Votre nom" placeholder="Votre nom" />
        <input type="text" value="Votre email" placeholder="Votre mail" />
        <textarea
          id="message"
          name="message"
          rows="8"
          cols="33"
          placeholder="Votre message"
        />
        <button>Envoyer</button>
      </div>
      <div className="contact__social">
        <p>Christelle Legros</p>
        <p>64480 USTARITZ</p>
        <p>06 87 24 54 57</p>
        <p>christelle.legros80@sfr.fr</p>
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
    </div>
  );
};

export default Contact;
