import React, {useEffect} from 'react';

import '../styles/header.scss';
import sun from '../images/icon-sun.svg';
import moon from '../images/icon-moon.svg';



function Header({ theme, toggleTheme }) {
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? 'hsl(236, 33%, 92%)' : 'hsl(235, 21%, 11%)'; // Світлий та темний фон
}, [theme]);

    return (
        <div className='header'>
            <h1 className='todo'>TODO</h1>
            <button className='btn-theme-toggle' onClick={toggleTheme}>
        {theme === 'light' ? (
          <img src={moon} alt="Switch to dark theme" />
        ) : (
          <img src={sun} alt="Switch to light theme" />
        )}
      </button>
        </div>
    );
}

export default Header;