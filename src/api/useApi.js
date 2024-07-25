import { useState } from 'react';
import { API_URL, register, fetchVideos, fetchVideoById, postComment, deleteComment } from './api';

const useApi = () => {
    const [apiKey, setApiKey] = useState('');
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [loading, setLoading] = useState(true);

    const initialize = async () => {
        try {
            const key = await register();
            setApiKey(key);
            const videos = await fetchVideos(key);
            setVideos(videos);
            if (videos.length > 0) {
                const video = await fetchVideoById(videos[0].id, key);
                setCurrentVideo(video);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error initializing API key and fetching videos:', error);
            setLoading(false);
        }
    };

    const handleVideoClick = async (id) => {
        try {
            const video = await fetchVideoById(id, apiKey);
            setCurrentVideo(video);
        } catch (error) {
            console.error('Error fetching video:', error);
        }
    };

    const handlePostComment = async (id, comment) => {
        try {
            // Create the request body with only the required fields
            const requestBody = {
                name: comment.name,
                comment: comment.comment
            };

            const response = await fetch(`${API_URL}/videos/${id}/comments?api_key=${apiKey}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error("Failed to post comment");
            }

            const newComment = await response.json();
            setCurrentVideo((prevVideo) => ({
                ...prevVideo,
                comments: [...prevVideo.comments, newComment],
            }));
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };

    const handleDeleteComment = async (videoId, commentId) => {
        try {
            const response = await fetch(`${API_URL}/videos/${videoId}/comments/${commentId}?api_key=${apiKey}`, {
                method: "DELETE",
            });

            console.log("Response Status:", response.status);

            if (!response.ok) {
                throw new Error("Failed to delete comment");
            }

            const data = await response.json();
            setCurrentVideo((prevVideo) => ({
                ...prevVideo,
                comments: prevVideo.comments.filter((comment) => comment.id !== commentId),
            }));
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    return {
        apiKey,
        videos,
        currentVideo,
        loading,
        initialize,
        handleVideoClick,
        handlePostComment,
        handleDeleteComment,
    };
};

export default useApi;
