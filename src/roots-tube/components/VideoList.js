import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const videoItems = videos.map(video =>
        <VideoItem
            key={video.id.videoId}
            video={video}
            onVideoSelect={onVideoSelect} />
    );
    return (
        <div className="ui relaxed divided list">
            There are {videos.length} videos
            {videoItems}
        </div>
    )
};

export default VideoList;