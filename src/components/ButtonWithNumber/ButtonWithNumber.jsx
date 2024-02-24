import React from "react";
import classes from "./ButtonWithNumber.module.css";

export const ButtonWithNumber = ({ children, ...props }) => {
  return (
    <div {...props} className={classes.myButtonWithNumber}>
      {children}
    </div>
  );
};
