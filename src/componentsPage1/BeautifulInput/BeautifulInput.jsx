import React from "react";
import classes from "./BeautifulInput.module.css";

export const BeautifulInput = ({
  type,
  labelText,
  id,
  len,
  // очень странно
  setVariable,
}) => {
  const changeFunction = (event) => {
    // event.preventDefault();
    setVariable(document.getElementById(id).value);
  };
  return (
    <div className={classes.myDivInput}>
      <input
        className={classes.myInput}
        id={id}
        type={type}
        size={len}
        placeholder=" "
        // и вот это тоже странно
        onChange={changeFunction}
      />
      <label className={classes.myLabel}>{labelText}</label>
    </div>
  );
};
