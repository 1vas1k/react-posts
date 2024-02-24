import React from "react";
import classes from "./SendComment.module.css";
import { Image } from "../Image/Image";
import { imageType } from "../Image/Image";

export const SendComment = ({
  oldComments,
  newComment,
  setNewComment,
  myFunction,
  setNumber,
  posts,
  idOfPost,
  ...props
}) => {
  const handleInputChange = (event) => {
    // setNewComment(event.target.value);
    setNewComment({
      text: event.target.value,
      commentatorName: JSON.parse(localStorage.getItem("login")).login,
      commentator: JSON.parse(localStorage.getItem("avatar")).avatar,
    });
  };
  const seeTempResult = (e) => {
    e.preventDefault();
    myFunction();
    // if (newComment !== "") setNumber((prev) => prev + 1);
    if (newComment.text !== "") setNumber((prev) => prev + 1);
    // if (newComment.text !== "") setNumber(posts[idOfPost].comments.lenght);
    oldComments.push(newComment);
    localStorage.setItem("posts", JSON.stringify({ posts: posts }));
    console.log(
      "posts[idOfPost].comments  = ",
      posts[idOfPost].comments.length
    );
    console.log("newComment = ", newComment);
  };
  return (
    <form {...props} className={classes.myBox}>
      <input
        className={classes.myEdit}
        type="text"
        // value={newComment}
        value={newComment.text}
        onChange={handleInputChange}
      />
      <Image image={imageType.SEND} onClick={seeTempResult} visible={true} />
    </form>
  );
};
