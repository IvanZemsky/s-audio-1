import React, { useContext, useEffect } from 'react';
import './Controls.scss';
import './Controls-media.scss';
import { SongContext } from '../../context/song-context';

import ControlsAdditional from '../UI/ControlsAdditional/ControlsAdditional';
import TimelineInput from '../UI/TimelineInput.jsx/TimelineInput';
import ControlsButtons from '../UI/ControlsButtons/ControlsButtons';

function Controls() {

  const { audioPath, audio, setTimelineValue } = useContext(SongContext);

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
    <section className="controls" style={controlsAppearanceStyle}>

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
            <svg className="controls-copy" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.51369 4.19008V3.43243C6.48632 2.8169 6.70585 2.21564 7.12433 1.75991C7.54282 1.30418 8.12628 1.031 8.74733 1H26.7641C27.3851 1.031 27.9686 1.30418 28.3871 1.75991C28.8056 2.21564 29.0251 2.8169 28.9977 3.43243V23.058C29.0251 23.6736 28.8056 24.2748 28.3871 24.7306C27.9686 25.1863 27.3851 25.4595 26.7641 25.4905H25.9927M2.67691 6.50952H22.0754C23.0016 6.50952 23.7523 7.2534 23.7523 8.17102V29.3385C23.7523 30.2561 23.0016 31 22.0754 31H2.67691C1.75078 31 1 30.2561 1 29.3385V8.17102C1 7.2534 1.75078 6.50952 2.67691 6.50952Z" stroke="black" strokeWidth="2" />
            </svg>
          </button>

          <ControlsButtons/>

        </div>

        <ControlsAdditional/>

      </div>

    </section>
  )
}

export default Controls