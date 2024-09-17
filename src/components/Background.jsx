import React from 'react';

import desktopDark from '../images/bg-desktop-dark.jpg';
import Header from './Header';

import '../styles/background.scss';


function Background() {
return (
    <div>
    <img src={desktopDark} alt="Background"  className='bg-photo'/>
    <Header />
</div>
);
 }

 export default Background;