import React from 'react';

const VideoDetail = ({ video }) => {
    const snippet = video.snippet;
    const videoSrc = "https://www.youtube.com/embed/" + video.id.videoId;
    //frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
    return (
        <div>
            <div className="ui embed">
                <iframe title="videoPlayer" src={videoSrc} />
            </div>
            <div class="ui segment">
                <h4 className="ui header">{snippet.title}</h4>
                <p>{snippet.description}</p>
            </div>
        </div>

    )
};

export default VideoDetail;