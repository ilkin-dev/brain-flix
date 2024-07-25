import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../../api/useApi';
import MainVideo from '../../components/MainVideo/MainVideo';
import BottomGroup from '../../components/BottomGroup/BottomGroup';

const VideoPlayerPage = () => {
    const { id } = useParams();
    const { apiKey, videos, currentVideo, loading, initialize, handleVideoClick } = useApi();

    useEffect(() => {
        initialize();
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
    const commentsCount = currentVideo?.comments?.length || 0;

    return (
        <div>
            <MainVideo currentVideoDetails={currentVideo} apiKey={apiKey} />
            <BottomGroup
                videos={sideVideos}
                currentVideoDetails={currentVideo}
                handleVideoClick={handleVideoClick}
                commentsCount={commentsCount}
            />
        </div>
    );
};

export default VideoPlayerPage;
