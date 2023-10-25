import { createContext, useState, useRef } from 'react'
import { songList } from '../song-data/song-list';
export const SongContext = createContext(null);

export function SongContextValues(props) {

   const [songArray, setSongArray] = useState(songList);
   const [audioPath, setAudioPath] = useState('');
   const [currentAudioData, setCurrentAudioData] = useState({}); // from song-list.js
   const [timelineValue, setTimelineValue] = useState(0);

   const audio = useRef(null); // only for <audio> in Controls
   const controlsRef = useRef(null); // only for .controls in Controls
   const lyricsTextRef = useRef(null); // only for <p> in Lyrics

   const togglePlayPause = () => {
      if (audio.current.paused) {
         audio.current.play();
      }
      else {
         audio.current.pause();
      }
   }
   
   const contextValues = {
      songArray, setSongArray,
      audioPath, setAudioPath,
      timelineValue, setTimelineValue,
      audio, controlsRef, lyricsTextRef,
      currentAudioData, setCurrentAudioData,
      togglePlayPause
   };

   return <SongContext.Provider value={contextValues}>
      {props.children}
   </SongContext.Provider>

}