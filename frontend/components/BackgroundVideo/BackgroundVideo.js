// import React, { useState, useEffect } from 'react';

// import classes from './BackgroundVideo.module.scss';

// const BackgroundVideo = ({children}) => {
//     const [videoSource, setVideoSource] = useState("./background-video.mp4");

//     useEffect(() => {
//         if ( window.innerWidth <= 768 ){
//             setVideoSource("./background-video-mobile.mp4");
//         }
//     }, []);

//     return (
//         <div className={classes.Container} >
//             <iframe
//                 src="https://player.vimeo.com/video/323570256?autoplay=1&background=1&muted=1"
//                 width="100%"
//                 height="100%"
//                 frameborder="0"
//                 allow="autoplay; fullscreen"
//                 allowfullscreen
//                 >
//             </iframe>
//             {/* <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
//                 <source src={videoSource} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video> */}

//             <div className={classes.Content}>
//                 {children}
//             </div>
//         </div>
//     )
// }

// export default BackgroundVideo