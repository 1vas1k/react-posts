import React from "react";
import classes from "./Icon.module.css";

export const Icon = ({ avatar, children, ...props }) => {
  return (
    <div
      style={{ backgroundImage: `url(${avatar})` }}
      {...props}
      className={classes.myIcon}
    >
      {children}
    </div>
  );
};
