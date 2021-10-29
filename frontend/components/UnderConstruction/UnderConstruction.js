import React from "react";
import Pulse from "react-reveal/Pulse";

import classes from "./UnderConstruction.module.scss";

const UnderConstruction = () => {
  return (
    <div className={classes.content}>
      <div className={classes["content-wrapper"]}>
        <Pulse>
          <h1>Light to Light</h1>
        </Pulse>

        <p className={classes.motto}>"A desire for light produces light"</p>
        <p className={classes["author-name"]}>Simone Weil</p>

        <p className={classes["launch-info"]}>COMING SOON!</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
