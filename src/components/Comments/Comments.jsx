import React from "react";
import classes from "./Comments.module.css";
import { SendComment } from "../SendComment/SendComment";
import { useState } from "react";
import { Name } from "../Name/Name";

export const Comments = ({
  // commentator,
  // commentatorName,
  oldComments,
  setNumber,
  active,
  setActive,
  idOfPost,
  posts,
  ...props
}) => {
  const [comments, setComments] = useState([oldComments]);
  const [newComment, setNewComment] = useState({
    text: "",
    commentator: "",
    commentatorName: "",
  });
  const handelEvent = () => {
    // if (newComment.trim() !== "") {
    if (newComment.text.trim() !== "") {
      setComments([...comments, newComment]);

      //
      //
      // const postsData = JSON.parse(localStorage.getItem("posts"));
      // console.log("allPosts = ", postsData);
      // console.log("allPosts.posts = ", postsData.posts);
      // const postIndex = postsData.posts.findIndex(
      //   (post) => post.id === idOfPost
      // );
      // console.log("postIndex = ", postIndex);
      //
      //
      //
      //
      // console.log("idOfPost = ", idOfPost);
      // console.log(
      //   "postsData.posts[idOfPost].comments = ",
      //   postsData.posts[idOfPost].comments
      // );
      //
      //
      //
      //
      // postsData[postIndex].comments = newComments;
      // localStorage.setItem("posts", JSON.stringify(postsData));
      //
      // const data = JSON.parse(localStorage.getItem("posts")).posts.map(
      //   (post) => {
      //     return {
      //       ...post,
      //       comments: [...comments, newComment],
      //     };
      //   }
      // );
      //
      // localStorage.setItem("posts", JSON.stringify({ posts: data }));
      //
      //
      setNewComment({ text: "", commentator: "", commentatorName: "" });
      console.log("posts[idOfPost] = ", posts[idOfPost].comments);
    }
  };
  return (
    <div
      {...props}
      className={`${classes.myModal} ${active ? classes.active : ""}`}
      onClick={() => setActive(false)}
    >
      <div
        {...props}
        className={`${classes.myContent} ${active ? classes.active : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div {...props} className={classes.myTextContent}>
          {/* {comments.map((comment, index) => ( */}
          {posts[idOfPost].comments.map((comment, index) => (
            <div className={classes.myText}>
              <div className={classes.myAuthor}>
                <div
                  // style={{ backgroundImage: `url(${commentator})` }}
                  style={{ backgroundImage: `url(${comment.commentator})` }}
                  className={classes.myIcon}
                />
                <Name>
                  {/* <p className={classes.myNameCommentator}>{commentatorName}</p> */}
                  <p className={classes.myNameCommentator}>
                    {comment.commentatorName}
                  </p>
                  <p className={classes.myNameP} key={index}>
                    {/* {comment} */}
                    {comment.text}
                  </p>
                </Name>
              </div>
            </div>
          ))}
        </div>

        <SendComment
          oldComments={oldComments}
          newComment={newComment}
          setNewComment={setNewComment}
          setNumber={setNumber}
          myFunction={handelEvent}
          posts={posts}
          idOfPost={idOfPost}
        />
      </div>
    </div>
  );
};
