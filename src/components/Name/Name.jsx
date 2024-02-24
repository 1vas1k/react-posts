import React from "react";
import classes from "./Name.module.css";

export const Name = ({ children, ...props }) => {
  return (
    <div {...props} className={classes.myName}>
      {children}
    </div>
  );
};
