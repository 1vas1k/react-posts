import React from "react";
import classes from "./StateButtons.module.css";

export const StateButtons = ({ children, ...props }) => {
  return (
    <div {...props} className={classes.myStateButtons}>
      {children}
    </div>
  );
};
