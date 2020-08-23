import React, {Component} from 'react';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';
import './css/index.css';
import {apiKey} from './config.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  state = {
    waterfalls: [],
    sunsets: [],
    javascript: [],
    search: []
  }


  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=waterfalls&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          waterfalls: response.data.photos.photo
        })
      })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          sunsets: response.data.photos.photo
        })
      })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=javascript&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          javascript: response.data.photos.photo
        })
      })
  }

  runSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        search: response.data.photos.photo
      })
    })
  }


  render() {
    return(
      <BrowserRouter>
        <div className='container'>
          <SearchForm  onSearch={this.runSearch}/>
          <Nav />
          <Switch>
            <Route path="/waterfalls" render={() => <PhotoContainer data={this.state.waterfalls}/>}/>
            <Route path="/sunsets" render={() => <PhotoContainer data={this.state.sunsets}/>}/>
            <Route path="/javascript" render={() => <PhotoContainer data={this.state.javascript}/>} />
            <Route path="/search/:topic" render={() => <PhotoContainer data={this.state.search}/>} />
          </Switch>
        </div>
    </BrowserRouter>
    ) 

  }
};

export default App;
