import React, { useRef, useState, useEffect } from 'react';
import styles from './index.module.scss';
import ReactPlayer  from 'react-player';

import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";

const StayHereQuietly = ({ videoURL, className }) => {
    const secondVideoRef = useRef();
    const [playing, setPlaying] = useState(false)
    const [cnOnPlay, setcnOnPlay] = useState(styles.playVideo)

    useEffect(() => {
      console.log(secondVideoRef);
    }, [secondVideoRef]);

    const onClickPlay = () => {
      console.log(secondVideoRef.current.getInternalPlayer());
      setPlaying(true);
      // styles.playVideo classNames()
    }

    return (
    <div className={`${styles.container} ${className}`}> 
      <ReactPlayer 
        ref={secondVideoRef}
        className={styles.video}
        url='https://player.vimeo.com/video/453162488'
        playing={playing}
        config={{
          vimeo: {
            playerOptions:{
              loop: true,
            }
          }
        }}
        />

        <div className={`${styles.prayerSent} ${(playing===true ? `${styles.showing} ${styles.shown}` : '')}`}>
          <span className={styles.caption + ' caption'}>YOUT CANDLE AND PRAYER</span>
          <h2 className={styles.title + ' title'}>Have been sent</h2>
        </div>
        <button className={`${cnOnPlay} ${(playing===true ? `${styles.hidding} ${styles.hidden}`  : '')}`} type="button" onClick={onClickPlay}>
          <span className={styles.caption + ' caption'}>TOUCH THE CANDLE</span>
          <h2 className={styles.title + ' title'}>To send your prayer</h2>
        </button>
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