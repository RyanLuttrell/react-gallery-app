import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class SearchForm extends Component {

//Set the state of the searchText to an empty string to allow for it being updated when the user enters a search
  state = {
    searchText: ''
  }

//Ensures that key strokes are tracked through the state being updated every time a key is pressed
  onSearchChange = e => {
    this.setState({searchText: e.target.value});
  }

//This function controls what happens when the form in submitted
  handleSubmit = e => {

//Prevent the page from refresshing on subimt
    e.preventDefault();
    let searchTopic = this.query.value;
    let path = `/search/${searchTopic}`;

//Create a new path in the browser with the path variable to ensure proper rendering of the page and to enable the back button on the browser
    this.props.history.push(path);

//Call back to the runSearch function in App.js that will fetch the needed data from Flickr's API
    this.props.onSearch(this.state.searchText);

//Reset the text field to make it easier for the user to enter another search
    e.currentTarget.reset();
  }

  render() {
    return(
      <form className="search-form" onSubmit={this.handleSubmit}>
      <input 
        type="text" 
        onChange={this.onSearchChange}
        name="search" 
        ref={(input) => this.query = input}
        placeholder="Search" required
      />
        <button type="submit" className="search-button">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
      </form>
        );
  }
}

//Export the component to allow other components to use it
export default withRouter(SearchForm);