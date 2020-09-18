import React from 'react';

import classes from './index.module.scss';

const Spinner = () => {
    return (
        <div className={classes.container} >
            <div className={classes.spinner}/>
        </div>
    )
}

export default Spinner