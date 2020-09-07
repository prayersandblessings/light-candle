import React, { useRef, useState, useEffect } from 'react';
import styles from './index.module.scss';
import ReactPlayer  from 'react-player';
import Router from 'next/router'
            
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";

const SHOWING_TITLE_CLASSES = `${styles.secondFrame} ${styles.prayerSent} ${styles.showing} ${styles.shown}`;
const HIDDING_TITLE_CLASSES = `${styles.secondFrame} ${styles.hidding} ${styles.hidden}`;
const TITLE_CLASSES_HIDDEN = `${styles.secondFrame} ${styles.prayerSent} ${styles.hidden}`;
const SHOWING_TIME_MILI_SECONDS = 4000;
const MILI_SECONDS_BEFORE_GO_TO_HOME = 100000;

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
      console.log(playedSeconds);
      if(playedSeconds >= MILI_SECONDS_BEFORE_GO_TO_HOME/1000){
        console.log('Reloading');
        Router.push('/light-a-candle')
      }
    }

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
            }
          }
        }}
        onProgress={onProgress}
        />

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

  // const audioRef = useRef();
  // const [isPlaying, setIsPlaying] = useState(true);
  // const [isShowingText, setIsShowingText] = useState(true);
  // const openNewWidow = () => {
  //   const miniCandle = window.open('', '_blank', 'width=280,height=498,scrollbars=yes,resizable=yes');
  //   miniCandle.document.write('<style>body { margin: 0px; }</style>')
  //   miniCandle.document.write('<img src="/little-candle.gif"></img>')
  // }

  // const disableAudio = () => {
  //   if(isPlaying){
  //     audioRef.current.pause();
  //     setIsPlaying(false);
  //   } else {
  //     audioRef.current.play();
  //     setIsPlaying(true);
  //   }
  // }
  // useEffect(()=>{
  //   setTimeout(
  //     () => {
  //       setIsShowingText(false);
  //     }, 5000
  //   )
  // },[])

  // const URL = window.location.href;

  // return (
  //   <div className={styles.container}>
  //     <div className={`${styles.showText} ${isShowingText ? '' : styles.fadeOut}`}>
  //       <span className="caption">Stay here quietly</span>
  //       <h1 className={styles.title + ' title'}>As long as you wish</h1>
  //     </div>
  //     <div className={styles.toolBar}>
  //       {/* {soundUrl && ( */}
  //         <div className={styles.icon}>
  //           <button onClick={disableAudio}>
  //             <img src="/icon-audio.svg" width="18px" />
  //           </button>
  //           <label className={styles.icon}>
  //             Mute
  //           </label>
  //         </div>
  //       {/* )} */}
  //       <div className={styles.icon}>
  //         <button onClick={openNewWidow}>
  //           <img src="/icon-download.svg" width="18px"></img>
  //         </button>
  //         <label>
  //           Download candle
  //         </label>
  //       </div>
  //       <div className={styles.icon}>
  //         <img src="/icon-share.svg" width="18px"></img>
  //         <label>
  //           <TwitterShareButton
  //             url={URL}
  //             title="Send your candle."
  //           >
  //             <TwitterIcon size={32} round={true} />
  //           </TwitterShareButton>

  //           <FacebookShareButton
  //             url={URL}
  //             quote="Send your candle."
  //           >
  //             <FacebookIcon size={32} round={true} />
  //           </FacebookShareButton>

  //           <WhatsappShareButton
  //             url={URL}
  //             title="Send your candle."
  //           >
  //             <WhatsappIcon size={32} round={true} />
  //           </WhatsappShareButton>
  //         </label>
  //       </div>
  //     </div>
  //     {soundUrl && (
  //       <div className={styles.audio}>
  //         <audio src={soundUrl}  ref={audioRef} autoPlay loop />
  //       </div>
  //     )}
  //   </div>
  // )





// import React, { useRef, useState, useEffect } from 'react';
// import styles from './StayHereQuietly.module.scss';
// import ReactPlayer  from 'react-player';

// import {
//   TwitterShareButton,
//   TwitterIcon,
//   FacebookShareButton,
//   FacebookIcon,
//   WhatsappShareButton,
//   WhatsappIcon
// } from "react-share";

// const openNewWidow = () => {
//   const miniCandle = window.open('', '_blank', 'width=280,height=498,scrollbars=yes,resizable=yes');
//   miniCandle.document.write('<style>body { margin: 0px; }</style>')
//   miniCandle.document.write('<img src="/little-candle.gif"></img>')
// }

// const StayHereQuietly = ({ soundUrl, playVideo=false }) => {
//   const audioRef = useRef();
//   const firstVideoRef= useRef();
//   const secondVideoRef = useRef();
//   const [isAudioPlaying, setIsAudioPlaying] = useState(true);
//   const [isShowingText, setIsShowingText] = useState(true);
//   const [isShowingFirstVideo, setIsShowingFirstVideo] = useState(true);
  
//   const disableAudio = () => {
//     if(isAudioPlaying){
//       audioRef.current.pause();
//       setIsAudioPlaying(false);
//     } else {
//       audioRef.current.play();
//       setIsAudioPlaying(true);
//     }
//   }

//   const onFirstVideoEnd = () => {
//     // const internalPlayer = secondVideoRef.getInternalPlayer('hls');
//     // secondVideoRef.current.play();
//     setIsShowingFirstVideo(false);
//     secondVideoRef.current.player.player.play();
//     // console.log(internalPlayer);
//   }

//   useEffect(()=>{
//     setTimeout(
//       () => {
//         setIsShowingText(false);
//         console.log(firstVideoRef.current);
//       }, 5000
//     )
//     //xseeked
//   },[])

//   useEffect(()=>{
//     if (playVideo){
//       firstVideoRef.current.player.player.play();
//     }
//   },[playVideo])


//   const URL = ''; //window.location.href;

//   return (
//     <div className={styles.container}>
//       <ReactPlayer 
//         ref={secondVideoRef}
//         className={styles.video}
//         url='https://player.vimeo.com/video/441214959'
//         width='100%'
//         height='100%'
//         config={{
//           vimeo: {
//             playerOptions:{
//               loop: true,
//             }
//           }
//         }}
//         />
//       { isShowingFirstVideo && (
//         <>
//         <ReactPlayer 
//           ref={firstVideoRef}
//           className={styles.video}
//           url='https://player.vimeo.com/video/441214686'
//           onEnded={onFirstVideoEnd}
//           width='100%'
//           height='100%'
//           config={{
//             vimeo: {
//               playerOptions:{
//                 loop: false,
//                 // background: true
//               }
//             }
//           }}
//           />
//           </>
//       )}
      

//       <div className={`${styles.showText} ${isShowingText ? '' : styles.fadeOut}`}>
//         <span className="caption">Stay here quietly</span>
//         <h1 className={styles.title + ' title'}>As long as you wish</h1>
//       </div>
//       <div className={styles.toolBar}>
//         {soundUrl && (
//           <div className={styles.icon}>
//             <button onClick={disableAudio}>
//               <img src="/icon-audio.svg" width="18px" />
//             </button>
//             <label className={styles.icon}>
//               Mute
//             </label>
//           </div>
//         )}
//         <div className={styles.icon}>
//           <button onClick={openNewWidow}>
//             <img src="/icon-download.svg" width="18px"></img>
//           </button>
//           <label>
//             Download candle
//           </label>
//         </div>
//         <div className={styles.icon}>
//           <img src="/icon-share.svg" width="18px"></img>
//           <label>
//             <TwitterShareButton
//               url={URL}
//               title="Send your candle."
//             >
//               <TwitterIcon size={32} round={true} />
//             </TwitterShareButton>

//             <FacebookShareButton
//               url={URL}
//               quote="Send your candle."
//             >
//               <FacebookIcon size={32} round={true} />
//             </FacebookShareButton>

//             <WhatsappShareButton
//               url={URL}
//               title="Send your candle."
//             >
//               <WhatsappIcon size={32} round={true} />
//             </WhatsappShareButton>
//           </label>
//         </div>
//       </div>
//       {soundUrl && (
//         <div className={styles.audio}>
//           <audio src={soundUrl}  ref={audioRef} autoPlay loop />
//         </div>
//       )}
//     </div>
//   )
// }

// export default StayHereQuietly