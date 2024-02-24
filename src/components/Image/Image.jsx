import React from "react";
import classes from "./Image.module.css";
import { FaComments } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export const imageType = {
  COMMENT: "comment",
  LIKE: "like",
  SEND: "send",
  COOl: "cool",
  DELETE: "delete",
};

export const Image = ({ image, children, visible, ...props }) => {
  const icon = () => {
    // eslint-disable-next-line default-case
    switch (image) {
      case imageType.COOl:
        return (
          <AiFillLike
            // color="white"
            size={30}
          />
        );
      case imageType.COMMENT:
        return (
          <FaComments
            // color="white"
            size={30}
          />
        );
      case imageType.SEND:
        return (
          <IoIosSend
            //  color="white"
            size={30}
          />
        );
      case imageType.DELETE:
        return (
          <RxCross2
            //  color="white"
            size={30}
          />
        );
    }
  };

  return (
    <button
      {...props}
      className={classes.myImage}
      style={{ display: visible ? "" : "none" }}
    >
      <>
        {icon()}
        {children}
      </>
    </button>
  );
};
