import axios from 'axios';

const PORT = process.env.PORT || 8080;

const API_URL = `http://localhost:${PORT}/videos`;

export const getVideos = () => axios.get(API_URL);

export const getVideosById = (id) => axios.get(`${API_URL}/${id}`);

export const uploadVideo = (video) => axios.post(`${API_URL}`, video);

export const postComment = (id, comment) => axios.post(`${API_URL}/${id}/comments`, comment);

export const deleteComment = (id, commentId) => axios.delete(`${API_URL}/${id}/comments/${commentId}`);