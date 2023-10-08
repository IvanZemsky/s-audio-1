import React, { useRef } from 'react';
import './Lyrics.scss';
import './Lyrics-media.scss';

import arrowRightIcon from '../../assets/img/arrow-right.svg';

function Lyrics() {

  const lyricsRef = useRef(null);

  const handleLyricsShow = () => {
    if (lyricsRef.current.style.transform !== 'translateX(0px)') {
      lyricsRef.current.style.transform = 'translateX(0px)';
    }
    else {
      lyricsRef.current.style.transform = 'translateX(calc(100% - 43.6px)';
    }
  }


  return (
    <section className="lyrics" ref={lyricsRef}>
      <button id="lyrics-show" type='button' onClick={handleLyricsShow}>
        <img src={arrowRightIcon} alt="Show lyrics of song" />
      </button>
      <p>
        Lorem ipsum dolor sit amet<br />
        Consectetur adipiscing elit.<br />
        Morbi orci mi<br />
        scelerisque et <br />
        <br />
        aliquet at,<br />
        fermentum et erat<br />
        Proin consectetur egestas sem<br />
        consequat pellentesque<br />
        <br />
        Nam id scelerisque dolor<br />
        eget venenatis est<br />
        <br />
        Sed vitae rhoncus nulla<br />
        sit amet porttitor magna.<br />
        Curabitur finibus felis viverra<br />
        augue accumsan, ut molestie<br />
        <br />
        leo gravida.<br />
        Vivamus vitae sem eget elit porta<br />
        vulputate eget in metus.<br />
        Ut hendrerit nibh tortor<br />
        ut accumsan dolor rutrum ut<br />
        <br />
        Sed laoreet pulvinar urna, ac<br />
        convallis velit euismod posuere<br />
        Donec hendrerit erat ut maximus<br />
        dictum. Duis sit amet ultrices<br />
        quam<br />
        <br />
        Nam non tellus
      </p>
    </section>

  )
}

export default Lyrics