import React from "react";
import classes from "./BodyDiv.module.css";
import { NavBar } from "../NavBar/NavBar";
import { TimeOfDay } from "../TimeOfDay/TimeOfDay";
import { hancock } from "../../assets";

export const BodyDiv = ({ children, ...props }) => {
  // const time = new Date();
  return (
    <div {...props} className={classes.myBody}>
      <NavBar avatar={JSON.parse(localStorage.getItem("avatar")).avatar} />
      {/* <TimeOfDay time={time.getHours()} /> */}
      {children}
    </div>
  );
};
