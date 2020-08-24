import React, {Component} from 'react';

//Import other components to allow this component to use them
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';
import Search from './components/Search';
import NoPage from './components/NoPage';
import Home from './components/Home';
import './css/index.css';

//Import the apiKey from config.js to ensure that no one else can see it
import apiKey from './config.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Import Axios to allow for more efficient fetch requests
import axios from 'axios';

class App extends Component {

  state = {
    waterfalls: [],
    sunsets: [],
    javascript: [],
    search: [],
    queryText: '',
    loading: false
  }

//Fetches the data for the waterfall images
  componentDidMount() {
    this.setState({
      loading: true
    })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=waterfalls&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          waterfalls: response.data.photos.photo
        })
      })

//Fetches the data for the sunsets images
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          sunsets: response.data.photos.photo
        })
      })

//Fetches the data for the JavaScript images
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=javascript&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          javascript: response.data.photos.photo
        })
      })
    this.setState({
      loading: false
    })
  }

//Fetches the data and updates the queryText for the search the end user is trying to compelte
  runSearch = (query) => {
    this.setState({
      loading: true
    })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        search: response.data.photos.photo,
        queryText: query,
        loading: false
      })
    })

//Console any errors that may occur in the fetch process to the console
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    })
  }


  render() {
    return(
      <BrowserRouter>
        <div className='container'>
          <SearchForm  onSearch={this.runSearch}/>
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Home />}/>
            <Route path="/waterfalls" render={() => <PhotoContainer name='Waterfalls' data={this.state.waterfalls}/>}/>
            <Route path="/sunsets" render={() => <PhotoContainer name='Sunsets' data={this.state.sunsets}/>}/>
            <Route path="/javascript" render={() => <PhotoContainer name='JavaScript' data={this.state.javascript}/>} />
            <Route path="/search/:searchTopic" render={() => <Search data={this.state.search} queryText={this.state.queryText} loading={this.state.loading}/>} />
            <Route render={() => <NoPage/>} />
          </Switch>
        </div>
    </BrowserRouter>
    ) 

  }
};

export default App;
