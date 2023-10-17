import { createContext, useState, useRef } from 'react'

export const SongContext = createContext(null);

export function SongContextValues(props) {

   const [audioPath, setAudioPath] = useState('');
   const [isAudioPaused, setIsAudioPaused] = useState(false);
   const [currentAudioData, setCurrentAudioData] = useState({}); // from song-list.js
   const [timelineValue, setTimelineValue] = useState(0);

   const audio = useRef(null); // only for <audio> in Controls
   const controlsRef = useRef(null); // only for .controls in Controls
   const lyricsTextRef = useRef(null); // only for <p> in Lyrics

   const togglePlayPause = () => {
      if (audio.current.paused) {
         audio.current.play();
         //setIsAudioPaused(audio.current.paused);
      }
      else {
         audio.current.pause();
         //setIsAudioPaused(audio.current.paused);
      }
   }
   
   const contextValues = {
      audioPath, setAudioPath,
      isAudioPaused, setIsAudioPaused,
      timelineValue, setTimelineValue,
      audio, controlsRef, lyricsTextRef,
      currentAudioData, setCurrentAudioData,
      togglePlayPause
   };

   return <SongContext.Provider value={contextValues}>
      {props.children}
   </SongContext.Provider>

}