import React, {useState} from 'react';

// import desktopDark from '../images/bg-desktop-dark.jpg';

import Container from './Container';
import '../styles/background.scss';


import lightmood from '../images/bg-desktop-light.jpg';
import darkmood from '../images/bg-desktop-dark.jpg';
function Background() {
  // Створюємо стан для теми
  const [theme, setTheme] = useState('light');

  // Функція для зміни теми
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
return (
  
    <div className={`bg-container ${theme}`}>
     
       
       <img className='light-mood' src={lightmood} alt='light' style={{ display: theme === 'light' ? 'block' : 'none' }}  />
      <img className='dark-mood' src={darkmood} alt='dark' style={{ display: theme === 'dark' ? 'block' : 'none' }} />

    <Container theme={theme} toggleTheme={toggleTheme} />
</div>
);
 }

 export default Background;