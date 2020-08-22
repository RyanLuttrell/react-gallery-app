import React from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    NavLink
} from 'react-router-dom';
import PhotoContainer from './PhotoContainer';

const Nav = () => {
    return(
        <BrowserRouter>
            <nav class="main-nav">
                <NavLink to='#'>Computers</NavLink>
                <NavLink to='#'>Sunsets</NavLink>
                <NavLink to='#'>Waterfalls</NavLink>

                <Switch>
                    <Route exact path="/" component={PhotoContainer} />
                    <Route exact path="/" component={PhotoContainer} />
                    <Route exact path="/" component={PhotoContainer} />
                </Switch>
            </nav>
        </BrowserRouter>

    );
}

export default Nav;