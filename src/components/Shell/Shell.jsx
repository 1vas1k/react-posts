import React from "react";
import classes from "./Shell.module.css";

export const Shell = ({ children, ...props }) => {
  return (
    <div {...props} className={classes.myShell}>
      {children}
    </div>
  );
};
