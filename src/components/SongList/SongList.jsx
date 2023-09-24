import React from 'react';
import Song from '../Song/Song';
import './SongList.scss';

function SongList() {
  return (
    <section className="song-list">
      <h1 className='song-list_title'>Your music</h1>

      
        <div className="song-list_songs">
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
        </div>
      
    </section>   
  )
}

export default SongList