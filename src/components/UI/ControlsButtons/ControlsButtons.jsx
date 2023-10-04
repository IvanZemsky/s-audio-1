import React, { useContext } from 'react'
import { SongContext } from '../../../context/song-context'

function ControlsButtons() {

   const { togglePlayPause } = useContext(SongContext);

   return (
      <div className="controls-buttons">
         <button id="previousSong" type='button'>
            <svg className='controls-previous' viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 0.5H0.5V1V34.75V35.25H1H4.75H5.25V34.75V1V0.5H4.75H1ZM6.71745 17.459L6.09341 17.875L6.71745 18.291L28.8476 33.0445L29.625 33.5628V32.6285V3.12155V2.18729L28.8477 2.70552L6.71745 17.459ZM14.6566 17.875L24.875 11.0628V24.6872L14.6566 17.875Z" fill="black" stroke="black" />
            </svg>
         </button>
         <button id="playSong" type='button' onClick={togglePlayPause}>
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
   )
}

export default ControlsButtons