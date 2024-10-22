import React from "react";
import "../styles/container.scss";

import Inputs from "./Inputs";

import Header from "./Header";

function Container({ theme, toggleTheme }) {

  return (
    <section className="container">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Inputs theme={theme} toggleTheme={toggleTheme} />
    </section>
  );
}

export default Container;
