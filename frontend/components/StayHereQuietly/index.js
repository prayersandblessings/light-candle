import React, { useRef, useState, useEffect } from 'react';
import styles from './index.module.scss';
import ReactPlayer  from 'react-player';
import Router from 'next/router';
            

const SHOWING_TITLE_CLASSES = `${styles.secondFrame} ${styles.prayerSent} ${styles.showing} ${styles.shown}`;
const HIDDING_TITLE_CLASSES = `${styles.secondFrame} ${styles.hidding} ${styles.hidden}`;
const TITLE_CLASSES_HIDDEN = `${styles.secondFrame} ${styles.prayerSent} ${styles.hidden}`;
const SHOWING_TIME_MILI_SECONDS = 4000;
const MINUTES_BEFORE_GO_TO_HOME = process.env.PARAM_MINUTES_BEFORE_GO_HOME;

const StayHereQuietly = ({ 
  className,
  firstFrame,
  hideSecondFrame = true,
  secondFrame,
  soundUrl,
  videoURL,
}) => {
    const secondVideoRef = useRef();
    const audioRef = useRef();

    const [playing, setPlaying] = useState(false);
    const [onPlayClass, setcnOnPlay] = useState(styles.playVideo);
    const [cnHaveSent, setCnHaveSent] = useState(TITLE_CLASSES_HIDDEN);

    useEffect(() => {
      if(cnHaveSent === SHOWING_TITLE_CLASSES) {
        setTimeout(() => {
          if(hideSecondFrame) {
            setCnHaveSent(HIDDING_TITLE_CLASSES);
          }
        }, SHOWING_TIME_MILI_SECONDS * 2.5);
      }
    }, [cnHaveSent]);

    const onClickPlay = () => {
      if(playing===false) {
        setPlaying(true);
        if(soundUrl) {
          audioRef.current.play();
        }
        setTimeout(() => {
          setCnHaveSent(SHOWING_TITLE_CLASSES);
        }, SHOWING_TIME_MILI_SECONDS);
      }
    }

    const onProgress = ({ playedSeconds }) => {
      if(playedSeconds >= MINUTES_BEFORE_GO_TO_HOME*60){
        Router.push('/light-a-candle')
      }
    }

    // const onSoundEnded = () => {
    //   Router.push('/light-a-candle')
    // }

    const cnOnPlay = `${onPlayClass} ${(playing===true ? `${styles.hidding} ${styles.hidden}`  : '')}`;

    return (
    <div className={`${styles.container} ${className}`}> 

      <ReactPlayer 
        ref={secondVideoRef}
        className={styles.video}
        url={videoURL}
        playing={playing}
        config={{
            vimeo: {
            playerOptions:{
                loop: true,
                playsinline: false
            }
            }
        }}
        onProgress={onProgress}
      />

        <div className={styles.overlayLeft}></div>
        <div className={styles.overlayRight}></div>

        {soundUrl && (
          <audio src={soundUrl} ref={audioRef} />
        )}

        <div className={cnHaveSent}>
          {secondFrame}
        </div>

        {cnHaveSent === TITLE_CLASSES_HIDDEN && (
          <div className={cnOnPlay} role="button" onClick={onClickPlay}>
            {firstFrame}
          </div>
        )}
      </div>
    );
  };

  export default StayHereQuietly
