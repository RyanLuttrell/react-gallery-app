import React from 'react';
import {
    NavLink
} from 'react-router-dom';


const Nav = () => {
    return(
        <nav className="main-nav">
            <ul>
            <li><NavLink to='/waterfalls'>Waterfalls</NavLink></li>
            <li><NavLink to='/sunsets'>Sunsets</NavLink></li>
            <li><NavLink to='/javascript'>Javascript</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;