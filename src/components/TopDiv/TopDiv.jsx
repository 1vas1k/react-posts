import React from "react";
import classes from "./TopDiv.module.css";

export const TopDiv = ({ children, ...props }) => {
  return (
    <div {...props} className={classes.myTopDiv}>
      {children}
    </div>
  );
};
