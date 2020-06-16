import React from 'react';

import classes from './BackgroundVideo.module.scss';

const BackgroundVideo = ({children}) => {
    const videoSource = "./background-video.mp4"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                {children}
            </div>
        </div>
    )
}

export default BackgroundVideo