import React, { useState } from "react";
import classes from "./SignUp.module.css";
import { BeautifulInput } from "../BeautifulInput/BeautifulInput";
import { ChooseAvatar, avatarChoise } from "../ChooseAvatar/ChooseAvatar";
import { Link, useNavigate } from "react-router-dom";

// import { saitama, sanji } from "../../assets";

export const SignUp = () => {
  const [visible, setVisible] = useState(true);

  // const tempPosts = [
  //   {
  //     avatar: saitama,
  //     name: "Saitama",
  //     accountName: "onepunchman",
  //     commentatorName: "_sanji_",
  //     commentator: sanji,
  //     comments: [],
  //     text: "In exchange for power, maybe I’ve lost something that is essential to being human.",
  //     id: 0,
  //   },
  //   {
  //     avatar: sanji,
  //     name: "Sanji",
  //     accountName: "sanji_nami_robin",
  //     commentatorName: "saitama",
  //     commentator: saitama,
  //     comments: [],
  //     text: "I'll Never Kick A Woman, Even If I Die!",
  //     id: 1,
  //   },
  // ];

  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const chooseAvatar = () => {
    setVisible((prev) => !prev);
  };

  const [currentAvatar, setCurrentAvatar] = useState(avatarChoise.QUEST);

  const handleSubmit = () => {
    if (name === "") return alert("Enter your name");
    if (login === "") return alert("Enter your login");
    if (email === "") return alert("Enter your email");
    if (password === "") return alert("Enter your password");
    if (document.getElementById("comfirmPassword").value === "")
      return alert("Repeat your password");
    if (
      document.getElementById("comfirmPassword").value !==
      document.getElementById("password").value
    )
      return alert("It must be two same passwords");
    if (currentAvatar === avatarChoise.QUEST) return alert("Choose your avatr");

    localStorage.setItem("avatar", JSON.stringify({ avatar: currentAvatar }));
    localStorage.setItem(
      "name",
      JSON.stringify({ name: document.getElementById("name").value })
    );
    localStorage.setItem(
      "login",
      JSON.stringify({ login: document.getElementById("login").value })
    );
    localStorage.setItem(
      "email",
      JSON.stringify({ email: document.getElementById("email").value })
    );
    localStorage.setItem(
      "password",
      JSON.stringify({ password: document.getElementById("password").value })
    );
    // localStorage.setItem("posts", tempPosts);
    navigate("/main-page");
  };

  return (
    <div className={classes.myBody}>
      <div className={classes.myContainer}>
        <div className={classes.myContent}>
          <p className={classes.myP}>{visible ? "SIGN UP" : "CHOOSE AVATAR"}</p>

          {/* First page */}
          <div style={{ display: visible ? "" : "none" }}>
            <form
              className={classes.myForm}
              // onSubmit={handleSubmit}
            >
              <div className={classes.myRowInput}>
                <BeautifulInput
                  id={"name"}
                  type={"text"}
                  labelText={"Name"}
                  len={25}
                  // variable={name}
                  setVariable={setName}
                />
                <BeautifulInput
                  id={"login"}
                  type={"text"}
                  labelText={"Login"}
                  len={25}
                  setVariable={setLogin}
                />
              </div>
              <BeautifulInput
                id={"email"}
                type={"text"}
                labelText={"Email"}
                len={54}
                setVariable={setEmail}
              />
              <BeautifulInput
                id={"password"}
                type={"text"}
                labelText={"Password"}
                len={54}
                setVariable={setPassword}
              />
              <BeautifulInput
                id={"comfirmPassword"}
                type={"text"}
                labelText={"Comfirm password"}
                len={54}
                setVariable={setPassword}
              />
              <button
                type={"button"}
                className={classes.myFormButtonForAvatar}
                onClick={chooseAvatar}
              >
                CHOOSE AVATAR
              </button>
              {/* Когда тут стоит Link, то даные в local storage не передаються */}
              <div
                // to={"/main-page"}
                className={classes.myFormButton}
                type="submit"
                onClick={handleSubmit}
              >
                SIGN UP
              </div>
            </form>
            <div className={classes.myOtherVariantContainer}>
              <div className={classes.myOtherVariant}>
                <p>Already have an account?</p>
                <Link to={"/sign-in"} className={classes.signIn}>
                  SIGN IN
                </Link>
              </div>
            </div>
          </div>
          <div
            style={{ display: visible ? "none" : "" }}
            className={classes.mySecondPage}
          >
            <div
              className={classes.myCurrentAvatar}
              style={{ backgroundImage: `url(${currentAvatar})` }}
            />
            <div className={classes.myAvatarContainer}>
              <div className={classes.myRow}>
                <ChooseAvatar
                  avatar={avatarChoise.SANJI}
                  onClick={() => setCurrentAvatar(avatarChoise.SANJI)}
                />
                <ChooseAvatar
                  avatar={avatarChoise.NAMY}
                  onClick={() => setCurrentAvatar(avatarChoise.NAMY)}
                />
                <ChooseAvatar
                  avatar={avatarChoise.ROBIN}
                  onClick={() => setCurrentAvatar(avatarChoise.ROBIN)}
                />
                <ChooseAvatar
                  avatar={avatarChoise.FRANFY}
                  onClick={() => {
                    setCurrentAvatar(avatarChoise.FRANFY);
                  }}
                />
              </div>
              <div className={classes.myRow}>
                <ChooseAvatar
                  avatar={avatarChoise.ZORO}
                  onClick={() => setCurrentAvatar(avatarChoise.ZORO)}
                />
                <ChooseAvatar
                  avatar={avatarChoise.LUFFY}
                  onClick={() => setCurrentAvatar(avatarChoise.LUFFY)}
                />
                <ChooseAvatar
                  avatar={avatarChoise.HANCOCK}
                  onClick={() => setCurrentAvatar(avatarChoise.HANCOCK)}
                />
                <ChooseAvatar
                  avatar={avatarChoise.WHITEBREAD}
                  onClick={() => setCurrentAvatar(avatarChoise.WHITEBREAD)}
                />
              </div>
            </div>
            <button
              type={"button"}
              className={classes.myFormButtonForAvatar}
              onClick={chooseAvatar}
            >
              BACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
