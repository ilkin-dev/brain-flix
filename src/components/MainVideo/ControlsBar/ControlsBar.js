import React from 'react';
import './ControlsBar.css';
import icons from '../../../config/icons';

const ControlsBar = () => {
  return (
    <div className="controlsBar">
      <div className='control control__left'>
        <button className='control-button'>
          <img src={icons.play}></img>
        </button>
      </div>
      <div className='control control__mid'>
        <div className='control__mid-timeline'></div>
        <div className='control__mid-timeframe'>0:00/4:01</div>
      </div>
      <div className='control control__right'>
        <button className='control-button'>
          <img src={icons.fullScreen}></img>
        </button>
        <button className='control-button'>
          <img src={icons.volumeUp}></img>
        </button>
      </div>
    </div>
  );
};

export default ControlsBar;
