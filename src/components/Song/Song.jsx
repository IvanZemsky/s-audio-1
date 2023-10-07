import React, { useState } from 'react'
import { useContext } from 'react'

import { SongContext } from '../../context/song-context'
import './Song.scss'
import './Song-media.scss'

function Song({ songData }) {

   const { audioPath, setAudioPath, togglePlayPause } = useContext(SongContext);

   const songOnCoverStyles = {
      display: 'flex',
      backgroundColor: 'rgb(49, 49, 49, 0.8)',
   }

   const songAnimationStyles = (audioPath === songData.path) ? songOnCoverStyles : { display: 'none' };

   const setAudio = () => {
      if (audioPath !== songData.path) {
         setAudioPath(songData.path);
         return;
      }
      togglePlayPause();
   }

   return (
      <li className='song' onClick={setAudio}>

         <div className="song-info">
            <div className="song-info_cover">

               {songData.cover ? (
                  <img src={songData.cover} alt={`Cover of ${songData.name}`} />
               ) : (
                  <svg className='song-cover_placeholder' viewBox="0 0 26 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M13.9231 11.8705V30.2251V11.8705ZM13.9231 11.8705V5.54201C13.9231 5.146 13.9231 4.94797 13.9871 4.7795C14.0436 4.63071 14.1354 4.499 14.2539 4.39646C14.3883 4.28031 14.5698 4.21768 14.9329 4.09245L23.056 1.2912C23.7123 1.06487 24.0406 0.951689 24.3018 1.01955C24.5303 1.07895 24.7284 1.22661 24.8553 1.43223C25 1.66716 25 2.02502 25 2.74074V9.06928C25 9.46529 25 9.66329 24.9359 9.83179C24.8794 9.98058 24.7877 10.1123 24.6692 10.2148C24.5348 10.331 24.3533 10.3936 23.9902 10.5188L15.8671 13.3201C15.2108 13.5464 14.8825 13.6596 14.6213 13.5917C14.3927 13.5323 14.1946 13.3847 14.0678 13.1791C13.9231 12.9441 13.9231 12.5863 13.9231 11.8705ZM13.9231 30.2251C13.9231 32.8622 11.0302 35 7.46154 35C3.89292 35 1 32.8622 1 30.2251C1 27.5879 3.89292 25.4503 7.46154 25.4503C11.0302 25.4503 13.9231 27.5879 13.9231 30.2251Z" fill="black" />
                     <path d="M13.9231 11.8705V30.2251M13.9231 11.8705V5.542C13.9231 5.146 13.9231 4.94797 13.9871 4.7795C14.0436 4.63071 14.1354 4.499 14.2539 4.39646C14.3883 4.28031 14.5698 4.21768 14.9329 4.09245L23.056 1.2912C23.7123 1.06487 24.0406 0.951689 24.3018 1.01955C24.5303 1.07895 24.7284 1.22661 24.8553 1.43223C25 1.66716 25 2.02502 25 2.74074V9.06928C25 9.46529 25 9.66329 24.9359 9.83179C24.8794 9.98058 24.7877 10.1123 24.6692 10.2148C24.5348 10.331 24.3533 10.3936 23.9902 10.5188L15.8671 13.3201C15.2108 13.5464 14.8825 13.6596 14.6213 13.5917C14.3927 13.5323 14.1946 13.3847 14.0678 13.1791C13.9231 12.9441 13.9231 12.5863 13.9231 11.8705ZM13.9231 30.2251C13.9231 32.8622 11.0302 35 7.46154 35C3.89292 35 1 32.8622 1 30.2251C1 27.5879 3.89292 25.4503 7.46154 25.4503C11.0302 25.4503 13.9231 27.5879 13.9231 30.2251Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               )}

               <div className='song-animation' style={songAnimationStyles}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
               </div>

            </div>
            <div className="song-info_text">
               <p className="song-name">{songData.name}</p>
               <p className="song-singer">{songData.singer}</p>
            </div>
         </div>

         <div className="song-time-menu">
            <p className='song-time'>{songData.duration}</p>
            <button type='button' className="song-menu">
               <div className="song-menu_circle"></div>
               <div className="song-menu_circle"></div>
               <div className="song-menu_circle"></div>
            </button>
         </div>
      </li>
   )
}

export default Song