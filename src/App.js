import React from 'react';
import Photo from './components/Photo'
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';
import './css/index.css';
import './config.js'
import { render } from '@testing-library/react';

const App = () => (
  <div className='container'>
      <SearchForm />
      <Nav />
      <PhotoContainer />
      <Photo />
      <NotFound />



  </div>

);

export default App;
