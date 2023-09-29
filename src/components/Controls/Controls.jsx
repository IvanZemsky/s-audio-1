import React, { useState, useContext } from 'react'
import './Controls.scss';
import { SongContext } from '../../context/song-context';

function Controls() {

  const {audioPath} = useContext(SongContext);

  const [timelineValue, setTimelineValue] = useState(0);
  const [volumeValue, setVolumeValue] = useState(0);

  const handleTimeline = (event) => {
    setTimelineValue(event.target.value);
  }

  const handleVolume = (event) => {
    setVolumeValue(event.target.value);
  }

  return (
    <section className="controls">

      <div className="controls-content">

        <audio src={audioPath}></audio>

        <div className="controls-common">
          <div className="controls-info-wrap">
            <p className="controls-info">Song name - Singer</p>
          </div>

          <button id='copySongInfo' type='button'>
            <svg className="controls-copy" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.51369 4.19008V3.43243C6.48632 2.8169 6.70585 2.21564 7.12433 1.75991C7.54282 1.30418 8.12628 1.031 8.74733 1H26.7641C27.3851 1.031 27.9686 1.30418 28.3871 1.75991C28.8056 2.21564 29.0251 2.8169 28.9977 3.43243V23.058C29.0251 23.6736 28.8056 24.2748 28.3871 24.7306C27.9686 25.1863 27.3851 25.4595 26.7641 25.4905H25.9927M2.67691 6.50952H22.0754C23.0016 6.50952 23.7523 7.2534 23.7523 8.17102V29.3385C23.7523 30.2561 23.0016 31 22.0754 31H2.67691C1.75078 31 1 30.2561 1 29.3385V8.17102C1 7.2534 1.75078 6.50952 2.67691 6.50952Z" stroke="black" strokeWidth="2" />
            </svg>
          </button>

          <div className="controls-buttons">
            <button id="previousSong" type='button'>
              <svg className='controls-previous' viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.5H0.5V1V34.75V35.25H1H4.75H5.25V34.75V1V0.5H4.75H1ZM6.71745 17.459L6.09341 17.875L6.71745 18.291L28.8476 33.0445L29.625 33.5628V32.6285V3.12155V2.18729L28.8477 2.70552L6.71745 17.459ZM14.6566 17.875L24.875 11.0628V24.6872L14.6566 17.875Z" fill="black" stroke="black" />
              </svg>
            </button>
            <button id="playSong" type='button'>
              <svg className='controls-play' viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0V44L39 22L0 0Z" fill="black" />
              </svg>
            </button>
            <button id="nextSong" type='button'>
              <svg className='controls-next' viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.5H0.5V1V34.75V35.25H1H4.75H5.25V34.75V1V0.5H4.75H1ZM6.71745 17.459L6.09341 17.875L6.71745 18.291L28.8476 33.0445L29.625 33.5628V32.6285V3.12155V2.18729L28.8477 2.70552L6.71745 17.459ZM14.6566 17.875L24.875 11.0628V24.6872L14.6566 17.875Z" fill="black" stroke="black" />
              </svg>
            </button>
          </div>
        </div>

        <div className="controls-additional">
          <div className="controls-timeline">
            <p className='controls-current-time'>0:00</p>
            <input
              type="range"
              id="songTimeline"
              min="0"
              max="100"
              value={timelineValue}
              onChange={handleTimeline}
            />
            <p className='controls-all-time'>3:01</p>
          </div>

          <div className="controls-volume">

            <div className='controls-volume_img'>
              <svg viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.0561 8.25071C19.9279 9.43437 20.4444 10.9057 20.4444 12.5C20.4444 14.0944 19.9279 15.5656 19.0561 16.7493M21.8333 2.99812C24.3906 5.33235 26 8.72451 26 12.5C26 16.2755 24.3906 19.6676 21.8333 22.0019M3.22222 8.25071H4.47389C5.23907 8.25071 5.62165 8.25071 5.97618 8.15343C6.29032 8.06724 6.58715 7.92546 6.85318 7.73452C7.15343 7.51904 7.39835 7.21929 7.88821 6.61982L11.5353 2.15649C12.1404 1.41595 12.4429 1.04568 12.7072 1.00714C12.9361 0.973767 13.1662 1.05875 13.3211 1.23381C13.5 1.43596 13.5 1.91795 13.5 2.88192V22.118C13.5 23.0821 13.5 23.5641 13.3211 23.7662C13.1662 23.9413 12.9361 24.0263 12.7072 23.9928C12.4431 23.9543 12.1404 23.5841 11.5353 22.8435L7.88821 18.3802C7.39835 17.7808 7.15343 17.4809 6.85318 17.2655C6.58715 17.0745 6.29032 16.9328 5.97618 16.8466C5.62165 16.7493 5.23907 16.7493 4.47389 16.7493H3.22222C2.44437 16.7493 2.05544 16.7493 1.75835 16.5949C1.49701 16.4591 1.28454 16.2424 1.15137 15.976C1 15.673 1 15.2762 1 14.483V10.517C1 9.72368 1 9.32709 1.15137 9.02409C1.28454 8.75757 1.49701 8.54089 1.75835 8.40509C2.05544 8.25071 2.44437 8.25071 3.22222 8.25071Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <input
              type="range"
              id="songVolume"
              min="0"
              max="100"
              value={volumeValue}
              onChange={handleVolume}
            />
          </div>

          <button id='repeatSong' type='button'>
            <svg className='controls-repeat' viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35.7224 29.357H2.92317L9.47223 22.8051L8.37294 21.7058L0 30.0802L8.37294 38.4531L9.47223 37.3538L3.0296 30.9097H37.278V16.9194H35.7239L35.7224 29.357Z" fill="black" />
              <path d="M3.08354 9.14856H35.8697L29.3731 15.6466L30.4724 16.7459L38.8439 8.3744L30.4709 0L29.3716 1.09929L35.8653 7.59586H1.52792V21.5862H3.08208L3.08354 9.14856Z" fill="black" />
            </svg>
          </button>
        </div>

      </div>

    </section>
  )
}

export default Controls