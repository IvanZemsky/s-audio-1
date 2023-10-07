import React from 'react';

import Song from '../Song/Song';
import { songList } from '../../song-data/song-list.js';
import './SongList.scss';
import './SongList-media.scss';

function SongList() {

  return (
    <section className="song-list">
      <h1 className='song-list_title'>Your music</h1>

      <ul className="song-list_songs">
        {songList.map(item => <Song key={item.id} songData={item} />)}
      </ul>

    </section>
  )
}

export default SongList