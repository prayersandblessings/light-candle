import React, { useRef, useState, useEffect } from 'react';
import styles from './StayHereQuietly.module.scss';

import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";

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

  const URL = window.location.href;

  return (
    <div className={styles.container}>
      <div className={`${styles.showText} ${isShowingText ? '' : styles.fadeOut}`}>
        <span className="caption">Stay here quietly</span>
        <h1 className={styles.title + ' title'}>As long as you wish</h1>
      </div>
      <div className={styles.toolBar}>
        {/* {soundUrl && ( */}
          <div className={styles.icon}>
            <button onClick={disableAudio}>
              <img src="/icon-audio.svg" width="18px" />
            </button>
            <label className={styles.icon}>
              Mute
            </label>
          </div>
        {/* )} */}
        <div className={styles.icon}>
          <button onClick={openNewWidow}>
            <img src="/icon-download.svg" width="18px"></img>
          </button>
          <label>
            Download candle
          </label>
        </div>
        <div className={styles.icon}>
          <img src="/icon-share.svg" width="18px"></img>
          <label>
            <TwitterShareButton
              url={URL}
              title="Send your candle."
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>

            <FacebookShareButton
              url={URL}
              quote="Send your candle."
            >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>

            <WhatsappShareButton
              url={URL}
              title="Send your candle."
            >
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
          </label>
        </div>
      </div>
      {soundUrl && (
        <div className={styles.audio}>
          <audio src={soundUrl}  ref={audioRef} autoPlay loop />
        </div>
      )}
    </div>
  )
}

export default StayHereQuietly