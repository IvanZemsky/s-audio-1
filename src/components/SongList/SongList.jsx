import React, { useRef, useState } from 'react';

import Song from '../Song/Song';
import { songList } from '../../song-data/song-list.js';
import './SongList.scss';
import './SongList-media.scss';

function SongList() {

  const songsRef = useRef(null);
  const [songArray, setSongArray] = useState(songList);

  return (
    <section className="song-list">
      <h1 className='song-list_title'>Your music</h1>

      <ul className="song-list_songs" ref={songsRef}>
        {songArray.map(item =>
          <Song
            key={item.id}
            songData={item}
            songsRef={songsRef}
          />
        )}
      </ul>

    </section>
  )
}

export default SongList