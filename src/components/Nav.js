import React from 'react';

import {
    NavLink
} from 'react-router-dom';

//Creation of rhe Nav component with links to the three pages
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

//Export the component to allow other components to use it
export default Nav;