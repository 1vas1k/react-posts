import React, { useEffect, useState } from "react";
import { BodyDiv } from "../BodyDiv/BodyDiv";
import { AddPost } from "../AddPost/AddPost";
import { Post } from "../Post/Post";
import { saitama, sanji } from "../../assets";

export const MainPage = () => {
  // const changeUserParamethrs = (array) => {
  //   return array.map((post) => {
  //     return {
  //       ...post,
  //       // commentatorName: JSON.parse(localStorage.getItem("login")).login,
  //       // commentator: JSON.parse(localStorage.getItem("avatar")).avatar,
  //     };
  //   });
  // };

  const setMyPostsAgine = () => {
    if (localStorage.getItem("posts")) {
      // if (JSON.parse(localStorage.getItem("posts")).posts.length > 2) {
      //   const data = JSON.parse(localStorage.getItem("posts")).posts;
      //   const setPostChanges = changeUserParamethrs(data);
      //   return setPostChanges;
      // }
      return JSON.parse(localStorage.getItem("posts")).posts;
    }
    return [
      {
        avatar: saitama,
        name: "Saitama",
        accountName: "onepunchman",
        commentatorName: JSON.parse(localStorage.getItem("login")).login,
        commentator: JSON.parse(localStorage.getItem("avatar")).avatar,
        comments: [],
        text: "In exchange for power, maybe I’ve lost something that is essential to being human.",
        countLikes: 0,
        countSends: 0,
        id: 0,
      },
      {
        avatar: sanji,
        name: "Sanji",
        accountName: "sanji_nami_robin",
        commentatorName: JSON.parse(localStorage.getItem("login")).login,
        commentator: JSON.parse(localStorage.getItem("avatar")).avatar,
        comments: [],
        text: "I'll Never Kick A Woman, Even If I Die!",
        countLikes: 0,
        countSends: 0,
        id: 1,
      },
    ];
  };
  const [posts, setPosts] = useState(setMyPostsAgine());

  const [newPost, setNewPost] = useState({
    avatar: "",
    name: "",
    accountName: "",
    commentatorName: JSON.parse(localStorage.getItem("login")).login,
    commentator: JSON.parse(localStorage.getItem("avatar")).avatar,
    comments: [],
    countLikes: 0,
    countSends: 0,
    text: "",
  });
  const myFunction = () => {
    if (newPost.text === "") {
      return alert("Enter your text");
    }
    setPosts((prev) => [...prev, { ...newPost, id: posts.length }]);
    // setPosts(() => [...posts, { ...newPost, id: posts.length }]);

    setNewPost({
      avatar: "",
      name: "",
      accountName: "",
      commentatorName: JSON.parse(localStorage.getItem("login")).login,
      commentator: JSON.parse(localStorage.getItem("avatar")).avatar,
      comments: [],
      countLikes: 0,
      countSends: 0,
      text: "",
    });
  };

  useEffect(() => {
    // console.log("post has been changed");
    localStorage.setItem("posts", JSON.stringify({ posts: posts }));
    setPostsArray(JSON.parse(localStorage.getItem("posts")).posts);
  }, [posts]);

  const [postsArray, setPostsArray] = useState(
    //
    setMyPostsAgine()
    //
  );

  return (
    <BodyDiv>
      <AddPost
        newPost={newPost}
        setNewPost={setNewPost}
        myFunction={myFunction}
      />
      {postsArray.map((post) => {
        // console.log("postsArray = ", postsArray);
        // console.log("posts = ", posts);
        // console.log("post.countLikes = ", post.countLikes);
        // console.log("post.name = ", post.name);
        return (
          <Post
            countLikes={post.countLikes}
            countSends={post.countSends}
            avatar={post.avatar}
            name={post.name}
            accountName={post.accountName}
            comments={post.comments}
            text={post.text}
            posts={postsArray}
            setPosts={setPosts}
            id={post.id}
          />
        );
      })}
    </BodyDiv>
  );
};
