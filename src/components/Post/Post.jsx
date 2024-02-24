import React, { useState } from "react";
import { Shell } from "../Shell/Shell";
import { TopDiv } from "../TopDiv/TopDiv";
import { Icon } from "../Icon/Icon";
import { Name } from "../Name/Name";
import { Text } from "../Text/Text";
import { StateButtons } from "../StateButtons/StateButtons";
import { ButtonWithNumber } from "../ButtonWithNumber/ButtonWithNumber";
import { Image, imageType } from "../Image/Image";
import { Comments } from "../Comments/Comments";
import classes from "./Post.module.css";

export const Post = ({
  countLikes,
  countSends,
  avatar,
  name,
  accountName,
  comments,
  text,
  posts,
  setPosts,
  id,
}) => {
  const [number1, setNumber1] = useState(countLikes);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(countSends);
  const [modalActive, setModalActive] = useState(false);

  const defineVisibility = (name, accountName) => {
    if (
      name === JSON.parse(localStorage.getItem("name")).name &&
      accountName === JSON.parse(localStorage.getItem("login")).login
    ) {
      return true;
    } else {
      return false;
    }
  };

  const deletePost = () => {
    const updatePosts = posts.filter((post) => post.id !== id);
    setPosts(updatePosts);
  };

  return (
    <div className={classes.myPost}>
      <Shell>
        <TopDiv>
          <Icon avatar={avatar} />

          <Name>
            <h1>{name}</h1>
            <h2>{accountName}</h2>
          </Name>

          {/* delete */}
          <div className={classes.myPositionOfCross}>
            <Image
              visible={defineVisibility(name, accountName)}
              image={imageType.DELETE}
              onClick={deletePost}
            />
          </div>
        </TopDiv>

        <Text>{text}</Text>

        <StateButtons>
          <ButtonWithNumber>
            <Image
              visible={true}
              image={imageType.COOl}
              onClick={() => {
                setNumber1((prev) => prev + 1);
                // posts[id].countLikes = posts[id].countLikes + 1;
                localStorage.setItem("posts", JSON.stringify({ posts: posts }));
              }}
            />
            <div>{number1}</div>
          </ButtonWithNumber>

          <ButtonWithNumber>
            <Image
              visible={true}
              image={imageType.COMMENT}
              onClick={() => setModalActive(true)}
            />
            <div>{posts[id].comments.length}</div>
          </ButtonWithNumber>

          <ButtonWithNumber>
            <Image
              visible={true}
              image={imageType.SEND}
              onClick={() => {
                setNumber3(number3 + 1);
                // console.log("posts = ", posts[id].countLikes);
                // posts[id].countSends = posts[id].countSends + 1;
                localStorage.setItem("posts", JSON.stringify({ posts: posts }));
              }}
            />
            <div>{number3}</div>
          </ButtonWithNumber>
        </StateButtons>
      </Shell>

      <Comments
        oldComments={comments}
        setNumber={setNumber2}
        active={modalActive}
        setActive={setModalActive}
        idOfPost={id}
        posts={posts}
      ></Comments>
    </div>
  );
};
