// src/VideoContext.js
import React, { createContext, useState, useEffect } from 'react';


export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
    const [api, setApi] = useState(null);
    const [videos, setVideos] = useState([]);
    const [currentVideoId, setCurrentVideoId] = useState(null);
    const [currentVideoDetails, setCurrentVideoDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initializeApiAndFetchVideos = async () => {
            try {
                const brainFlixApi = new BrainFlixApi('');
                const apiKey = await brainFlixApi.register();
                brainFlixApi.apiKey = apiKey;
                setApi(brainFlixApi);

                const fetchedVideos = await brainFlixApi.getVideos();
                setVideos(fetchedVideos);

                if (fetchedVideos.length > 0) {
                    setCurrentVideoId(fetchedVideos[0].id);
                }
            } catch (error) {
                console.error('Error initializing API or fetching videos:', error);
            } finally {
                setLoading(false);
            }
        };

        initializeApiAndFetchVideos();
    }, []);

    useEffect(() => {
        const fetchVideoDetails = async (videoId) => {
            try {
                const details = await api.getVideoDetails(videoId);
                setCurrentVideoDetails(details);
            } catch (error) {
                console.error('Error fetching video details:', error);
            }
        };

        if (currentVideoId && api) {
            fetchVideoDetails(currentVideoId);
        }
    }, [currentVideoId, api]);

    return (
        <VideoContext.Provider value={{
            videos,
            currentVideoId,
            setCurrentVideoId,
            currentVideoDetails,
            loading
        }}>
            {children}
        </VideoContext.Provider>
    );
};
