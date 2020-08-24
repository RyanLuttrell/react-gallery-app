import React from 'react';

//Import other components to allow them to be used
import Photo from './Photo';
import NotFound from './NotFound';


const Search = props => {

    const results = props.data;
    let photos;
    
    if (results.length > 0) {
        photos = results.map(photo => <Photo farm={photo.farm} key={photo.id} secret={photo.secret} server={photo.server} id={photo.id}/>)
    } else {

//Render a NotFound component if there aren't any results for the search
        photos = <NotFound />
    }

    if (props.loading) {
        return(
            <p>Loading...</p>
        )
    } else {
        return(
            <div className='photo-container'>
                <h2>{props.queryText} Results</h2>
                <ul>
                    {photos}
                </ul>
            </div>
        );
    }
}

//Export the component to allow other components to use it
export default Search;