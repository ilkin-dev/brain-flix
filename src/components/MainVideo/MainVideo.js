import './MainVideo.css';

const MainVideo = ({ currentVideoDetails, apiKey }) => {
  if (!currentVideoDetails) {
    return <div>Loading video...</div>;
  }

  let videoSrc = `https://unit-3-project-api-0a5620414506.herokuapp.com/stream?api_key=${apiKey}`;
  return (
    <div className="mainVideo section">
      <div className='container'>
        <img className='mainVideo__thumbnail' src={currentVideoDetails.image} alt='VIDEO THUMBNAIL' ></img>

        <div className='videoPlayer'>
          <video
            className="videoPlayer__video"
            controls
            autoPlay
            loop
            preload="auto"
            width="100%"
            height="auto"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
