import React from "react";
import classes from "./SignIn.module.css";
import { BeautifulInput } from "../BeautifulInput/BeautifulInput";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <div className={classes.myBody}>
      <div className={classes.myContainer}>
        <div className={classes.myContent}>
          <p className={classes.myP}>SIGN IN</p>

          {/* First page */}
          <div>
            <form className={classes.myForm}>
              <BeautifulInput type={"text"} labelText={"Login"} len={54} />
              <BeautifulInput type={"text"} labelText={"Password"} len={54} />
              <Link
                to={"/main-page"}
                className={classes.myFormButton}
                onClick={() => console.log("SIGM IN works")}
              >
                SIGN IN
              </Link>
            </form>
            <div className={classes.myOtherVariantContainer}>
              <div className={classes.myOtherVariant}>
                <p>Don't have an account?</p>
                <Link to={"/"} className={classes.signUp}>
                  SIGN UP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
