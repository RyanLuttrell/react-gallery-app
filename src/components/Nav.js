import React from 'react';
import {
    NavLink
} from 'react-router-dom';


const Nav = () => {
    return(
        <nav class="main-nav">
            <ul>
            <li><NavLink to='/computers'>Computers</NavLink></li>
            <li><NavLink to='/waterfalls'>Waterfalls</NavLink></li>
            <li><NavLink to='/sunsets'>Sunsets</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;