import React, { useRef, useState, useEffect } from 'react';
import styles from './StayHereQuietly.module.scss';
import ReactPlayer  from 'react-player';

import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";

const openNewWidow = () => {
  const miniCandle = window.open('', '_blank', 'width=280,height=498,scrollbars=yes,resizable=yes');
  miniCandle.document.write('<style>body { margin: 0px; }</style>')
  miniCandle.document.write('<img src="/little-candle.gif"></img>')
}

const StayHereQuietly = ({ soundUrl }) => {
  const audioRef = useRef();
  const firstVideoRef= useRef();
  const secondVideoRef = useRef();
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);
  const [isShowingText, setIsShowingText] = useState(true);
  const [isShowingFirstVideo, setIsShowingFirstVideo] = useState(true);
  
  const disableAudio = () => {
    if(isAudioPlaying){
      audioRef.current.pause();
      setIsAudioPlaying(false);
    } else {
      audioRef.current.play();
      setIsAudioPlaying(true);
    }
  }
  const onFirstVideoEnd = () => {
    // const internalPlayer = secondVideoRef.getInternalPlayer('hls');
    // secondVideoRef.current.play();
    setIsShowingFirstVideo(false);
    secondVideoRef.current.player.player.play();
    // console.log(internalPlayer);
  }

  useEffect(()=>{
    
    setTimeout(
      () => {
        setIsShowingText(false);
        console.log(firstVideoRef.current);
        // firstVideoRef.current.player.player.addCuePoint(8, {
        //   customKey: 'customValue'
        // }).then(function(id) {
        //   // The cue point is added
        //   console.log('Loading something')
        // }).catch(function(error) {
        //   switch (error.name) {
        //       case 'UnsupportedError':
        //           // Cue points aren't supported by the current player or browser
        //           break;
        
        //       case 'RangeError':
        //           // The time is less than 0 or greater than the video's duration
        //           break;
        
        //       default:
        //           // Some other error occurred
        //           break;
        //   }
        // });

      }, 5000
    )
    //xseeked
  },[])

  const URL = window.location.href;

  return (
    <div className={styles.container}>
      <ReactPlayer 
        ref={secondVideoRef}
        className={styles.video}
        url='https://player.vimeo.com/video/434883189'
        width='100%'
        height='100%'
        config={{
          vimeo: {
            playerOptions:{
              loop: true,
            }
          }
        }}
        />
      { isShowingFirstVideo && (
        <ReactPlayer 
          ref={firstVideoRef}
          className={styles.video}
          url='https://player.vimeo.com/video/434882338'
          onEnded={onFirstVideoEnd}
          width='100%'
          height='100%'
          config={{
            vimeo: {
              playerOptions:{
                autoplay: true,
                loop: false,
                // background: true
              }
            }
          }}
          />
      )}
      

      <div className={`${styles.showText} ${isShowingText ? '' : styles.fadeOut}`}>
        <span className="caption">Stay here quietly</span>
        <h1 className={styles.title + ' title'}>As long as you wish</h1>
      </div>
      <div className={styles.toolBar}>
        {soundUrl && (
          <div className={styles.icon}>
            <button onClick={disableAudio}>
              <img src="/icon-audio.svg" width="18px" />
            </button>
            <label className={styles.icon}>
              Mute
            </label>
          </div>
        )}
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