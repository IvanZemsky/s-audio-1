import React, { useEffect, useRef, useContext, useState } from 'react';
import './Lyrics.scss';
import './Lyrics-media.scss';
import { SongContext } from '../../context/song-context';

import arrowRightIcon from '../../assets/img/arrow-right.svg';
import LyricsIcon from './LyricsIcon';
import lyricsIcon from '../../assets/img/lyrics.svg';
import noLyricsIcon from '../../assets/img/no-lyrics.svg';

function Lyrics() {

  const { lyricsTextRef, currentAudioData } = useContext(SongContext);

  const lyricsRef = useRef(null);
  const showBtnRef = useRef(null);
  const arrowRef = useRef(null);

  const [songLyrics, setSongLyrics] = useState([]);
  const [currentLyricsIcon, setCurrentLyricsIcon] = useState(lyricsIcon);

  const returnLyricsJSX = () => {
    return (
      <p ref={lyricsTextRef}>
        {songLyrics.map((songString, index) => (
        <React.Fragment key={index}>
          {songString}<br />
        </React.Fragment>
        ))}
      </p>
    );
  }

  const handleLyricsShow = () => {
    const lyricsTransformProperty = `translateX(calc(100% - ${showBtnRef.current.offsetWidth}px))`;

    if (lyricsRef.current.style.transform !== 'translateX(0px)') {
      lyricsRef.current.style.transform = 'translateX(0px)';
      arrowRef.current.style.transform = 'rotate(0deg)';
    }
    else {
      lyricsRef.current.style.transform = lyricsTransformProperty;
      arrowRef.current.style.transform = 'rotate(180deg)';
    }
  }

  useEffect(() => {

    if ('id' in currentAudioData && !(currentAudioData.lyrics)) {
       setCurrentLyricsIcon(noLyricsIcon);
    }

    if (currentAudioData && currentAudioData.lyrics) {
      const formattedLyrics = currentAudioData.lyrics.split('\n');
      setSongLyrics(formattedLyrics);
      setCurrentLyricsIcon(noLyricsIcon);
    }
  }, [currentAudioData])

  useEffect(() => {

    const handleResize = () => {
      const lyricsTransformProperty = `translateX(calc(100% - ${showBtnRef.current.offsetWidth}px))`;

      lyricsRef.current.style.transform = (window.innerWidth <= 745) ? lyricsTransformProperty : 'translateX(0px)';
      arrowRef.current.style.transform = 'rotate(180deg)';
    }

    window.addEventListener('resize', handleResize);

  }, []);


  return (
    <section className="lyrics" ref={lyricsRef}>
      <button id="lyrics-show" ref={showBtnRef} type='button' onClick={handleLyricsShow}>
        <p>T</p>
        <img src={arrowRightIcon} ref={arrowRef} alt="Show lyrics of song" />
      </button>

      {currentAudioData.lyrics ? (
        returnLyricsJSX()
      ) : (
        <LyricsIcon icon={currentLyricsIcon}/>
      )}

    </section>

  )
}

export default Lyrics