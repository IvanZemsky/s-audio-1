import React from 'react'
import lyricsIcon from '../../assets/img/lyrics.svg';

function LyricsIcon({ icon }) {

   let iconText = (icon === lyricsIcon) ? "Here will be track's lyrics" : "You haven't added track's lyrics yet";

   return (
      <div className='lyrics-icon_wrap'>
         <img className='lyrics-icon' src={icon} alt={iconText} height="115" />
         <p className='lyrics-icon_text'>
            {iconText}
         </p>
      </div>
   )
}

export default LyricsIcon