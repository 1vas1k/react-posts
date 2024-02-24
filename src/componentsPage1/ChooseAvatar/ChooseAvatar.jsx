import React from "react";
import classes from "./ChooseAvatar.module.css";
import {
  sanji,
  namy,
  robin,
  franky,
  luffy,
  zoro,
  whitebread,
  hancock,
  chopper,
  quest,
} from "../../assets";

export const avatarChoise = {
  SANJI: sanji,
  NAMY: namy,
  ROBIN: robin,
  FRANFY: franky,
  LUFFY: luffy,
  ZORO: zoro,
  WHITEBREAD: whitebread,
  HANCOCK: hancock,
  CHOPPER: chopper,
  QUEST: quest,
};

export const ChooseAvatar = ({ avatar, ...props }) => {
  //   const concreteAvatar = () => {
  //     console.log(avatarChoise[avatar]);
  //     console.log(avatarChoise.avatar);
  //     return avatarChoise[avatar];
  //   };

  return (
    <button
      {...props}
      className={classes.myAvatar}
      style={{ backgroundImage: `url('${avatar}')` }}
    ></button>
  );
};
