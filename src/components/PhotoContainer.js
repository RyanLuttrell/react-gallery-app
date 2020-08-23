import React from 'react';
import Photo from './Photo';

const PhotoContainer = props => {

    const results = props.data;
    const photos = results.map(photo => <Photo farm={photo.farm} key={photo.id} secret={photo.secret} server={photo.server} id={photo.id}/>)

        return(
            <div className='photo-container'>
                <h2>Results</h2>
                <ul>
                    {photos}
                </ul>

            </div>
    );
}

export default PhotoContainer;