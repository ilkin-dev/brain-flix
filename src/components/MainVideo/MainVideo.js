import './MainVideo.css';
import ControlsBar from './ControlsBar/ControlsBar';

const MainVideo = ({ currentVideoDetails }) => {
  if (!currentVideoDetails) {
    return <div>Loading video...</div>;
  }
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
            <source src={currentVideoDetails.video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
