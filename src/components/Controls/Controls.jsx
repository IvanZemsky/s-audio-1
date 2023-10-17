import React, { useContext, useEffect } from 'react';
import './Controls.scss';
import './Controls-media.scss';
import { SongContext } from '../../context/song-context';
import {songList} from '../../song-data/song-list'

import ControlsAdditional from '../UI/ControlsAdditional/ControlsAdditional';
import TimelineInput from '../UI/TimelineInput.jsx/TimelineInput';
import ControlsButtons from '../UI/ControlsButtons/ControlsButtons';

import copySongInfoBtn from '../../assets/img/copy.svg';

function Controls({songList}) {

  const { audioPath, audio, controlsRef, setTimelineValue } = useContext(SongContext);

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

        <div className="controls-common">
          <div className="controls-info-wrap">
            <p className="controls-info">Song name - Singer</p>
          </div>

          <button id='copySongInfo' type='button'>
            <img src={copySongInfoBtn} alt="Copy song name and singer" />
          </button>

          <ControlsButtons/>

        </div>

        <ControlsAdditional/>

      </div>

    </section>
  )
}

export default Controls