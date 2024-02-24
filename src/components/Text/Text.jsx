import React from "react";
import classes from "./Text.module.css";

export const Text = ({ children, ...props }) => {
  return (
    <div {...props} className={classes.myText}>
      {children}
    </div>
  );
};
