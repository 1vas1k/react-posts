import React from "react";
import classes from "./NavBar.module.css";
import { TimeOfDay } from "../TimeOfDay/TimeOfDay";
import { Link } from "react-router-dom";

export const NavBar = ({ avatar }) => {
  const time = new Date();
  return (
    <div className={classes.myContainer}>
      <div className={classes.myLeftPart}>
        <div
          className={classes.myAvatar}
          style={{
            backgroundImage: `url(${avatar})`,
          }}
        />
        <div className={classes.myInformation}>
          <h1>{JSON.parse(localStorage.getItem("name")).name}</h1>
          <h2>{JSON.parse(localStorage.getItem("login")).login}</h2>
        </div>
      </div>
      <div className={classes.myRightPart}>
        <div className={classes.myInformation}>
          <Link to={"/sign-in"} className={classes.myLink}>
            Change user
          </Link>
          <Link to={"/"} className={classes.myLink}>
            Sign Up
          </Link>
        </div>
        <TimeOfDay time={time.getHours()} />
      </div>
    </div>
  );
};
