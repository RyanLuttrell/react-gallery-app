import React from 'react';

//Creation of the NotFound component to cover when there aren't any results for a specific search
const NotFound = () => {
    return(
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
        </li>
    );
}

//Export the component to allow other components to use it
export default NotFound;