import React, { useState, useRef } from "react";
import classes from "./SignUpForm.module.css";
import { useHistory } from "react-router-dom";
const SignUpForm = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();
  const changeNewUserHandler = () => {
    setIsNewUser((prev) => {
      return !prev;
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const entereEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    console.log(enteredPassword, entereEmail);
    let URL;
    setIsLoading(true);
    if (isNewUser) {
      URL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAdwyXMPp4v37FEY43yf_J49OnDyfoMMAA";
    } else {
      URL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAdwyXMPp4v37FEY43yf_J49OnDyfoMMAA";
    }
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        email: entereEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setIsLoading(false);
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            let errorMessage = "Auth failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        history.replace("/exersice");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.signUp}>
      <h1>{isNewUser ? "Sign up" : "Log in"}</h1>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Enter Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Enter password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
            {isLoading && <p>Sending.....</p>}
          {!isLoading &&<button type="submit">{isNewUser ? "Sign up" : "Log in"}</button>}
          <button
            className={classes.toggle}
            onClick={changeNewUserHandler}
            type="button"
          >
            {!isNewUser ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;
