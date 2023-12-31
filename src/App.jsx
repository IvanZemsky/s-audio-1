import SongList from './components/SongList/SongList'
import Controls from './components/Controls/Controls'
import Lyrics from './components/Lyrics/Lyrics'

import { SongContextValues } from './context/song-context'
import './App.scss'
import './App-media.scss'
import { useState } from 'react'
import { songList } from './song-data/song-list'

//const [songArray, setSongArray] = useState(songList);

function App() {
  return (
    <SongContextValues>
      <main className="App">
        <div className="main-content">
          <SongList />
          <Lyrics />
        </div>
        <Controls/>
      </main>
    </SongContextValues>
  );
}

export default App;
