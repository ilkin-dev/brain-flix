import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';
import VideoPlayerPage from './pages/VideoPlayerPage/VideoPlayerPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<VideoPlayerPage />} />
        <Route path="/video" element={<VideoPlayerPage />} />
        <Route path="/video/:id" element={<VideoPlayerPage />} />
        <Route path="/upload" element={<VideoUploadPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
