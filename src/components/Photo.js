import React from 'react';

const Photo = props => {

//The link to each image that is fetched from the Flickr API
    const url = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}_m.jpg`
    return(
        <li>
            <img src={url} alt="" />
        </li>
    );
}

//Export the component to allow other components to use it
export default Photo;