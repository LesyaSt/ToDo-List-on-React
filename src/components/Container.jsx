import React from 'react';
import '../styles/container.scss';
import Header from './Header';
import Inputs from './Inputs';

function Container() {
    return (
        <section className='container'>
         <Header />
         <Inputs />
    </section>
    )
}

export default Container;