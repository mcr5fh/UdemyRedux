import React from 'react';

import './ImageList.css';

import ImageCard from './ImageCard';

const ImageList = (props) => {
    const searchResults = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>;
    });

    return (
        <div className="ui container">
        <div className="image-list">
            {searchResults}
        </div>
        </div>
    )
}

export default ImageList;