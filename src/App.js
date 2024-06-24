import useState from 'react';
import './App.css';

import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import BottomGroup from './components/BottomGroup/BottomGroup';

import videoDetails from './data/video-details.json';

function App() {

  return (
    <div className="App">
      < Header />
      < MainVideo />
      < BottomGroup currentVideoDetails={videoDetails[0]} />
    </div>
  );
}

export default App;
