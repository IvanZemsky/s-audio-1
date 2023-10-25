import React, { useContext, useEffect, useState } from 'react'
import pauseIcon from '../../../assets/img/pause.svg';
import playIcon from '../../../assets/img/play.svg';
import { SongContext } from '../../../context/song-context';
import nextPrevTrackIcon from '../../../assets/img/next-prev.svg'
import { songList } from '../../../song-data/song-list'

function ControlsButtons() {

   const { audio, audioPath, setAudioPath, togglePlayPause } = useContext(SongContext);
   const currentTrack = songList.find(track => track.path === audioPath);

   const [playPauseIcon, setPlayPauseIcon] = useState(pauseIcon);

   useEffect(() => {
      const handlePlay = () => setPlayPauseIcon(pauseIcon);
      const handlePause = () => setPlayPauseIcon(playIcon);
  
      audio.current.addEventListener('play', handlePlay);
      audio.current.addEventListener('pause', handlePause);
  
      return () => {
        audio.current.removeEventListener('play', handlePlay);
        audio.current.removeEventListener('pause', handlePause);
      };
    }, [audio]);

   const handlePreviousClick = () => {
      if (songList.indexOf(currentTrack) === 0) {
         setAudioPath(songList.at(-1).path); // play last track
      }
      else {
         const previousTrack = songList[songList.indexOf(currentTrack) - 1];
         setAudioPath(previousTrack.path);
      }
   }

   const handleNextClick = () => {
      if (songList.indexOf(currentTrack) === songList.length - 1) {
         setAudioPath(songList[0].path); // play first track
      }
      else {
         const nextTrack = songList[songList.indexOf(currentTrack) + 1];
         setAudioPath(nextTrack.path);
      }
   }

   return (
      <div className="controls-buttons">
         <button id="previousSong" type='button' onClick={handlePreviousClick}>
            <img src={nextPrevTrackIcon} className='controls-previous' alt="Play previous track" />
         </button>
         <button id="playSong" type='button' onClick={togglePlayPause}>
            <img src={playPauseIcon} className="controls-pause" alt="Pause track" />
         </button>
         <button id="nextSong" type='button' onClick={handleNextClick}>
            <img src={nextPrevTrackIcon} className='controls-next' alt="Play next track" />
         </button>
      </div>
   )
}

export default ControlsButtons