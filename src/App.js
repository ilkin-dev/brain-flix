// src/App.js
import React, { useEffect } from 'react';
import useApi from './api/useApi';

import './App.css';

import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import BottomGroup from './components/BottomGroup/BottomGroup';

const App = () => {
  const {
    apiKey,
    videos,
    currentVideo,
    loading,
    handleVideoClick,
    handlePostComment,
    initialize,
  } = useApi();

  useEffect(() => {
    initialize();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const sideVideos = videos.filter(video => video.id !== currentVideo?.id);
  const commentsCount = currentVideo?.comments?.length || 0;
  return (
    <div className="App">
      <Header />
      <MainVideo currentVideoDetails={currentVideo} />
      <BottomGroup
        videos={sideVideos}
        currentVideoDetails={currentVideo}
        handleVideoClick={handleVideoClick}
        commentCountOfCurrentVideo={commentsCount}
        handlePostComment={handlePostComment} />
    </div>
  );
};

export default App;
