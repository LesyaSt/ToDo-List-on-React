import React from 'react';

import '../styles/header.scss';
import sun from '../images/icon-sun.svg';
import moon from '../images/icon-moon.svg';

function Header(props) {
    return (
        <div className='header'>
            <h1 className='todo'>TODO</h1>
            <img src={sun} alt=""  className='sun'/>
            <img src={moon} alt="" className='moon'/>
        </div>
    );
}

export default Header;