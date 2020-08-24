import React from 'react';

//import other component
import Photo from './Photo';

const PhotoContainer = props => {
    const results = props.data;

//Map over all of the results from the fetch request and create a new Photo component to render it to the page
    const photos = results.map(photo => <Photo farm={photo.farm} key={photo.id} secret={photo.secret} server={photo.server} id={photo.id}/>)
        return(
            <div className='photo-container'>
                <h2>{props.name}  Results</h2>
                <ul>
                    {photos}
                </ul>
            </div>
    );
}

//Export the component to allow other components to use it
export default PhotoContainer;