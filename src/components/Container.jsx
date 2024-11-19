import PropTypes from "prop-types";

import Header from "./Header"; // Шлях до файлу Header.jsx
import Inputs from "./Inputs"; // Шлях до файлу Inputs.jsx

function Container({ theme, toggleTheme }) {
  return (
    <section className="container">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Inputs theme={theme} toggleTheme={toggleTheme} />
    </section>
  );
}

Container.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Container;
