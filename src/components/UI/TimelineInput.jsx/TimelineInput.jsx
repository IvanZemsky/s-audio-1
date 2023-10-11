import React, { useContext, useRef } from 'react'
import { SongContext } from '../../../context/song-context';

function TimelineInput() {

   const { audio, timelineValue, setTimelineValue } = useContext(SongContext);

   const timelineInput = useRef(null);

   const handleTimeline = (event) => {
      setTimelineValue(prev => event.target.value);
   }

   const handleClickTimeline = (event) => {
      audio.current.currentTime = audio.current.duration * (timelineInput.current.value / 100);
   }

   return (
      <input
         type="range"
         id="songTimeline"
         step="0.001"
         min="0"
         max="100"
         value={timelineValue}
         ref={timelineInput}
         onChange={handleTimeline}
         onInput={handleClickTimeline}
      />
   );
}

export default TimelineInput