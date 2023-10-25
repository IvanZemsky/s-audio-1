import React, { useContext, useRef, useState } from 'react';

import Song from '../Song/Song';
import { songList } from '../../song-data/song-list.js';
import './SongList.scss';
import './SongList-media.scss';
import { SongContext } from '../../context/song-context';

function SongList() {

  const songsRef = useRef(null);
  const {songArray} = useContext(SongContext);

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