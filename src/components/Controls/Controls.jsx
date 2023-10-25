import React, { useContext, useEffect, useState } from 'react';
import './Controls.scss';
import './Controls-media.scss';
import { SongContext } from '../../context/song-context';

import ControlsAdditional from '../UI/ControlsAdditional/ControlsAdditional';
import TimelineInput from '../UI/TimelineInput.jsx/TimelineInput';
import ControlsButtons from '../UI/ControlsButtons/ControlsButtons';

import ControlsInfoShow from '../UI/ControlsInfoShow/ControlsInfoShow';

function Controls() {

  const { audioPath, audio, controlsRef, 
    currentAudioData, setTimelineValue, setCurrentAudioData } = useContext(SongContext);

  const [showSongInfo, setShowSongInfo] = useState(false);

  const browserWidth = window.innerWidth;
  const controlsAppearanceStyle = (audioPath) ? { transform: 'translateY(0%)' } : null;

  useEffect(() => {
    if (audioPath) {
      audio.current.load();

      audio.current.addEventListener('canplaythrough', () => {
        audio.current.play();
      })
    }
  }, [audioPath]);

  const updateTimelineAuto = () => {
    if (audio.current.duration) {
      setTimelineValue((audio.current.currentTime / audio.current.duration) * 100);
    }
  }

  const handleOpenInfoClick = () => {
    setShowSongInfo(!showSongInfo);
  }

  return (
    <section className="controls" style={controlsAppearanceStyle} ref={controlsRef}>

      <audio
        src={audioPath}
        ref={audio}
        onTimeUpdate={updateTimelineAuto}
      >
      </audio>

      {browserWidth <= 1300 ? <TimelineInput/> : null}

      <div className="controls-content">

        {showSongInfo && <ControlsInfoShow showSongInfo={showSongInfo}/>}

        <div className="controls-common">
          <div className="controls-info-wrap">
            <p className="controls-info">{currentAudioData.name} - {currentAudioData.singer}</p>
          </div>

          <button id='openSongInfo' type='button' onClick={handleOpenInfoClick}>
            i
          </button>

          <ControlsButtons/>

        </div>

        <ControlsAdditional/>

      </div>

    </section>
  )
}

export default Controls