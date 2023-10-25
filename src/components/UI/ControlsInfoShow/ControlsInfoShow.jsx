import React, { useContext } from 'react'
import '../../Controls/Controls.scss';
import { SongContext } from '../../../context/song-context';

function ControlsInfoShow({ showSongInfo }) {
  const { currentAudioData } = useContext(SongContext);

  return (
    <div className={`controls-info-copy ${showSongInfo ? '.show' : '.hide'}`}>
      <p className="controls-info-copy_name">{currentAudioData.name}</p>
      <p className="controls-info-copy_singer">{currentAudioData.singer}</p>
    </div>
  )
}

export default ControlsInfoShow