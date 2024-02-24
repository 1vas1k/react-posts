import React from "react";
import classes from "./AddPost.module.css";

export const AddPost = ({ newPost, setNewPost, myFunction }) => {
  const addPost = (event) => {
    event.preventDefault();
    myFunction();
  };

  return (
    <div className={classes.myContainer}>
      <form className={classes.myForm} id="myForm">
        <div className={classes.myDivInput}>
          <input
            value={newPost.text}
            onChange={(newText) =>
              setNewPost({
                ...newPost,
                text: newText.target.value,
                avatar: JSON.parse(localStorage.getItem("avatar")).avatar,
                name: JSON.parse(localStorage.getItem("name")).name,
                accountName: JSON.parse(localStorage.getItem("login")).login,
              })
            }
            className={classes.myInput}
            type="text"
            placeholder=" "
          />
          <label className={classes.myLabel}>Text</label>
        </div>
        <div className={classes.myButtonContainer}>
          <button
            type="submit"
            className={classes.myAddButton}
            onClick={addPost}
          >
            Add post +
          </button>
        </div>
      </form>
    </div>
  );
};
