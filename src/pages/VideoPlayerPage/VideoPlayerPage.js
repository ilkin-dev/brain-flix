import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVideos, getVideosById, postComment } from '../../api/api';
import MainVideo from '../../components/MainVideo/MainVideo';
import BottomGroup from '../../components/BottomGroup/BottomGroup';

const VideoPlayerPage = () => {
    const { id } = useParams();
    const [videos, setVideos] = useState([]);
    const [loading, setLoadingState] = useState(true);
    const [currentVideo, setCurrentVideo] = useState(null);

    const handleVideoClick = (id) => {
        getVideosById(id)
            .then(response => {
                setCurrentVideo(response.data);
                setLoadingState(false);
            })
            .catch(error => {
                console.error('Error fetching videos:', error);
            });
    }

    useEffect(() => {
        getVideos()
            .then(response => {
                setVideos(response.data);
            })
            .catch(error => {
                console.error('Error fetching videos:', error);
            });
    }, []);

    useEffect(() => {
        if (id) {
            handleVideoClick(id);
        } else if (videos.length > 0) {
            handleVideoClick(videos[0].id);
        }
    }, [id, videos]);



    if (loading) {
        return <div>Loading...</div>;
    }

    const sideVideos = videos.filter(video => video.id !== currentVideo?.id);

    return (
        <div>
            <MainVideo currentVideoDetails={currentVideo} />
            <BottomGroup
                videos={sideVideos}
                currentVideoDetails={currentVideo}
                handleVideoClick={handleVideoClick}
            />
        </div>
    );
};

export default VideoPlayerPage;
