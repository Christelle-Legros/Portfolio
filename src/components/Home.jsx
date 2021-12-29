import React from "react";
import logoCL from "../assets/logo.png";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home__logo">
        <img src={logoCL} alt="Logo CL" />
      </div>
    </div>
  );
};

export default Home;
