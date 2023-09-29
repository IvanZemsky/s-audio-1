import { createContext, useState } from 'react'
import { songList } from '../song-data/song-list'

export const SongContext = createContext(null);

export function SongContextValues(props) {

   const [audioPath, setAudioPath] = useState('');
   
   const contextValues = {
      audioPath, setAudioPath
   };

   return <SongContext.Provider value={contextValues}>{props.children}</SongContext.Provider>

}