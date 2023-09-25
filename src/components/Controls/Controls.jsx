import React, { useState, useRef, useEffect } from 'react'
import './Controls.scss';

function Controls() {

  const [timelineValue, setTimelineValue] = useState(0);

  const controlsRef = useRef(null);
  
  useEffect(() => {
    if (window.innerHeight < 1030) {
      const scaleValue = (window.innerHeight / 900).toFixed(2);
      console.log(scaleValue);
      controlsRef.current.style.transform = `scale(${scaleValue})`;
    }
  }, []);

  const handleTimeline = (event) => {
    setTimelineValue(event.target.value);
  }

  return (
    <section className="controls">
      <div className="controls-content" ref={controlsRef}>
        <audio src="../../song-data/song-files/battle-of-the-dragons.mp3"></audio>
        <div className="controls-cover">
          <svg className='controls-placeholder' viewBox="0 0 188 261" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100.308 85.2501V220.75V85.2501ZM100.308 85.2501V38.5307C100.308 35.6072 100.308 34.1453 100.78 32.9016C101.197 31.8032 101.873 30.8309 102.748 30.0738C103.739 29.2164 105.077 28.7541 107.755 27.8295L167.663 7.14975C172.503 5.47891 174.924 4.64335 176.851 5.14432C178.536 5.58283 179.997 6.67289 180.933 8.19089C182 9.92518 182 12.5671 182 17.8507V64.5703C182 67.4938 182 68.9555 181.528 70.1994C181.111 71.2978 180.434 72.27 179.56 73.0271C178.569 73.8846 177.231 74.3467 174.552 75.2713L114.645 95.9512C109.804 97.6221 107.384 98.4575 105.457 97.9566C103.771 97.5181 102.311 96.4281 101.375 94.9101C100.308 93.1758 100.308 90.5339 100.308 85.2501ZM100.308 220.75C100.308 240.218 78.9724 256 52.6538 256C26.3353 256 5 240.218 5 220.75C5 201.281 26.3353 185.5 52.6538 185.5C78.9724 185.5 100.308 201.281 100.308 220.75Z" fill="black" />
            <path d="M100.308 85.2501V220.75M100.308 85.2501V38.5307C100.308 35.6072 100.308 34.1453 100.78 32.9016C101.197 31.8032 101.873 30.8309 102.748 30.0738C103.739 29.2164 105.077 28.7541 107.755 27.8295L167.663 7.14975C172.503 5.47891 174.924 4.64335 176.851 5.14432C178.536 5.58283 179.997 6.67289 180.933 8.19089C182 9.92518 182 12.5671 182 17.8507V64.5703C182 67.4938 182 68.9555 181.528 70.1994C181.111 71.2978 180.434 72.27 179.56 73.0271C178.569 73.8846 177.231 74.3467 174.552 75.2713L114.645 95.9512C109.804 97.6221 107.384 98.4575 105.457 97.9566C103.771 97.5181 102.311 96.4281 101.375 94.9101C100.308 93.1758 100.308 90.5339 100.308 85.2501ZM100.308 220.75C100.308 240.218 78.9724 256 52.6538 256C26.3353 256 5 240.218 5 220.75C5 201.281 26.3353 185.5 52.6538 185.5C78.9724 185.5 100.308 201.281 100.308 220.75Z" stroke="black" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="controls-timeline_wrap">
          <input
            type="range"
            id="songTimeline"
            min="0"
            max="100"
            value={timelineValue}
            onChange={handleTimeline}
          />
          <div className="controls-time">
            <p className='controls-current-time'>0:00</p>
            <p className='controls-all-time'>3:01</p>
          </div>
        </div>

        <div className="controls-info">
          <p className="controls-name">Song name</p>
          <p className="controls-singer">Singer</p>
        </div>

        <div className="controls-buttons">
          <button id="previousSong" type='button'>
            <svg className='controls-previous' viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0.5H0.5V1V34.75V35.25H1H4.75H5.25V34.75V1V0.5H4.75H1ZM6.71745 17.459L6.09341 17.875L6.71745 18.291L28.8476 33.0445L29.625 33.5628V32.6285V3.12155V2.18729L28.8477 2.70552L6.71745 17.459ZM14.6566 17.875L24.875 11.0628V24.6872L14.6566 17.875Z" fill="black" stroke="black" />
            </svg>
          </button>
          <button id="playSong" type='button'>
            <svg className='controls-play' viewBox="0 0 44 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 0V50L44 25L0 0Z" fill="black" />
            </svg>
          </button>
          <button id="nextSong" type='button'>
            <svg className='controls-next' viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0.5H0.5V1V34.75V35.25H1H4.75H5.25V34.75V1V0.5H4.75H1ZM6.71745 17.459L6.09341 17.875L6.71745 18.291L28.8476 33.0445L29.625 33.5628V32.6285V3.12155V2.18729L28.8477 2.70552L6.71745 17.459ZM14.6566 17.875L24.875 11.0628V24.6872L14.6566 17.875Z" fill="black" stroke="black" />
            </svg>
          </button>
        </div>

        <button id='repeatSong' type='button'>
          <svg className='controls-repeat' viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.7224 29.357H2.92317L9.47223 22.8051L8.37294 21.7058L0 30.0802L8.37294 38.4531L9.47223 37.3538L3.0296 30.9097H37.278V16.9194H35.7239L35.7224 29.357Z" fill="black" />
            <path d="M3.08354 9.14856H35.8697L29.3731 15.6466L30.4724 16.7459L38.8439 8.3744L30.4709 0L29.3716 1.09929L35.8653 7.59586H1.52792V21.5862H3.08208L3.08354 9.14856Z" fill="black" />
          </svg>
        </button>

      </div>
    </section>
  )
}

export default Controls