import React, {useEffect} from 'react';

import '../styles/header.scss';
import sun from '../images/icon-sun.svg';
import moon from '../images/icon-moon.svg';



function Header({ theme, toggleTheme }) {
  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light');
    document.body.classList.toggle('dark-theme', theme === 'dark');
  }, [theme]);
  

    return (
        <header className='header'>
            <h1 className='todo'>TODO</h1>
            <button className='btn-theme-toggle'
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                    >
        <img
    src={theme === 'light' ? moon : sun}
    alt={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
  />
      </button>
        </header>
    );
}

export default Header;