import React, { useRef, useState, useEffect } from 'react';
import styles from './index.module.scss';
import ReactPlayer  from 'react-player';
import Router from 'next/router';
            

const SHOWING_TITLE_CLASSES = `${styles.secondFrame} ${styles.prayerSent} ${styles.showing} ${styles.shown}`;
const HIDDING_TITLE_CLASSES = `${styles.secondFrame} ${styles.hidding} ${styles.hidden}`;
const TITLE_CLASSES_HIDDEN = `${styles.secondFrame} ${styles.prayerSent} ${styles.hidden}`;
const SHOWING_TIME_MILI_SECONDS = 4000;
const MINUTES_BEFORE_GO_TO_HOME = process.env.PARAM_MINUTES_BEFORE_GO_HOME;
const  TYPE_OF_REDIRECT = {
  TIME: 'Redirect after some seconds',  
  AFTER_TITLE_HIDDING: 'Redirect after hide the title',
}

const StayHereQuietly = ({ 
  className,
  firstFrame,
  hideSecondFrame = true,
  redirectMethod = TYPE_OF_REDIRECT.TIME,
  secondFrame,
  soundUrl,
  videoURL,
}) => {
    const secondVideoRef = useRef();
    const audioRef = useRef();

    const [playing, setPlaying] = useState(false);
    const [onPlayClass, setcnOnPlay] = useState(styles.playVideo);
    const [cnHaveSent, setCnHaveSent] = useState(TITLE_CLASSES_HIDDEN);
    useEffect(()=>{
      let vh = window.innerHeight * 0.01;
      let vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      document.documentElement.style.setProperty('--vw', `${vw}px`);
    })

    useEffect(() => {
      if(cnHaveSent === SHOWING_TITLE_CLASSES) {
        setTimeout(() => {
          if(hideSecondFrame) {
            setCnHaveSent(HIDDING_TITLE_CLASSES);
            if (redirectMethod === TYPE_OF_REDIRECT.AFTER_TITLE_HIDDING) {
              const redirectionTimeMiliSeconds = 1000;
              setTimeout(() => {
                Router.push('/light-a-candle')
              },redirectionTimeMiliSeconds);
            }
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
      if ((redirectMethod === TYPE_OF_REDIRECT.TIME) && playedSeconds >= MINUTES_BEFORE_GO_TO_HOME*60 ){
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
        className={styles.video2}
        url={videoURL}
      />

      <ReactPlayer 
        ref={secondVideoRef}
        className={styles.video}
        url={videoURL}
        playing={playing}
        config={{
            vimeo: {
            playerOptions:{
                loop: true,
                playsinline: true
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
  StayHereQuietly.TYPE_OF_REDIRECT = TYPE_OF_REDIRECT;

  export default StayHereQuietly
