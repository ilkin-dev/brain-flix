export const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";

export const register = async () => {
    try {
        const response = await fetch(`${API_URL}/register`);
        if (!response.ok) {
            throw new Error("Failed to register");
        }
        const data = await response.json();
        return data.api_key;
    } catch (error) {
        console.error("Error registering:", error);
        throw error;
    }
};

export const fetchVideos = async (apiKey) => {
    try {
        const response = await fetch(`${API_URL}/videos?api_key=${apiKey}`);
        if (!response.ok) {
            throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching videos:", error);
        throw error;
    }
};

export const fetchVideoById = async (id, apiKey) => {
    try {
        const response = await fetch(`${API_URL}/videos/${id}?api_key=${apiKey}`);
        if (!response.ok) {
            throw new Error("Failed to fetch video");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching video:", error);
        throw error;
    }
};

export const postComment = async (id, comment, apiKey) => {
    try {
        const response = await fetch(`${API_URL}/videos/${id}/comments?api_key=${apiKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(comment),
        });
        if (!response.ok) {
            throw new Error("Failed to post comment");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error posting comment:", error);
        throw error;
    }
};

export const deleteComment = async (videoId, commentId, apiKey) => {
    try {
        const response = await fetch(`${API_URL}/videos/${videoId}/comments/${commentId}?api_key=${apiKey}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Failed to delete comment");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error deleting comment:", error);
        throw error;
    }
};
