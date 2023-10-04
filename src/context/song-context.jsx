import { createContext, useState, useRef } from 'react'

export const SongContext = createContext(null);

export function SongContextValues(props) {

   const [audioPath, setAudioPath] = useState('');
   const [timelineValue, setTimelineValue] = useState(0);
   const audio = useRef(null); // only for <audio> in Controls

   const togglePlayPause = () => {
      if (audio.current.paused) {
         audio.current.play();
      }
      else {
         audio.current.pause();
      }
   }
   
   const contextValues = {
      audioPath, setAudioPath,
      timelineValue, setTimelineValue,
      audio, togglePlayPause
   };

   return <SongContext.Provider value={contextValues}>
      {props.children}
   </SongContext.Provider>

}