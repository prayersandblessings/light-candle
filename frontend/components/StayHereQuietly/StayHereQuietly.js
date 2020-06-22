import React, { useRef, useState, useEffect } from 'react';
import styles from './StayHereQuietly.module.scss';

const StayHereQuietly = ({ soundUrl }) => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isShowingText, setIsShowingText] = useState(true);
  const openNewWidow = () => {
    const miniCandle = window.open('', '_blank', 'width=280,height=498,scrollbars=yes,resizable=yes');
    miniCandle.document.write('<style>body { margin: 0px; }</style>')
    miniCandle.document.write('<img src="/little-candle.gif"></img>')
  }

  const disableAudio = () => {
    if(isPlaying){
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }
  useEffect(()=>{
    setTimeout(
      () => {
        setIsShowingText(false);
      }, 5000
    )
  },[])

  return (
    <div className={styles.container}>
      <div className={`${styles.showText} ${isShowingText ? '' : styles.fadeOut}`}>
        <span className="caption">Stay here quietly</span>
        <h1 className={styles.title + ' title'}>As long as you wish</h1>
      </div>
      <div className={styles.toolBar}>
        {soundUrl && (
          <button onClick={disableAudio}>
            <img src="/icon-audio.svg" width="18px" />
          </button>
        )}
        <button onClick={openNewWidow}>
          <img src="/icon-download.svg" width="18px"></img>
        </button>
        <button>
          <img src="/icon-share.svg" width="18px"></img>
        </button>
      </div>
      {soundUrl && (
        <div className={styles.audio}>
          <audio src={soundUrl}  ref={audioRef} autoPlay />
        </div>
      )}
    </div>
  )
}

export default StayHereQuietly