import React from 'react';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';
import './css/index.css';
import {apiKey} from './config.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

const App = () => (

    <BrowserRouter>
        <div className='container'>
          <SearchForm />
          <Nav />
          <PhotoContainer />
          <Switch>
            <Route path="/computers" render={() => <PhotoContainer topic="computers"/>}/>
            <Route path="/waterfalls" render={() => <PhotoContainer topic="waterfalls"/>}/>
            <Route path="/sunsets" render={() => <PhotoContainer topic="sunsets"/>} />
            <Route component={NotFound} />
          </Switch>
        </div>
    </BrowserRouter>
);

export default App;
