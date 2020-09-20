import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../actions/auth";

const Login = (props) => {
  const history = useHistory();
  const dispatcher = useDispatch();
  const [loginError, setLoginError] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSignin = (e) => {
    e.preventDefault();
    const mail = e.target.email.value;
    const pass = e.target.password.value;
    if (mail === "test@domain.com" && pass === "123456789") {
      setLoginError(false);
      setLoginSuccess(true);
      dispatcher(signin(mail));
      setTimeout(() => {
        history.push("/dashboard");
      }, 3000);
    } else {
      setLoginError(true);
      setLoginSuccess(false);
    }
  };

  return (
    <div className="login_wrapper appPage">
      <div className="login_container">
        {loginError ? (
          <div className="alert alert-danger" role="alert">
            Invalid Email or Password
          </div>
        ) : null}
        {loginSuccess ? (
          <div className="alert alert-success" role="alert">
            Success! You will be redirect to the Dashboard
          </div>
        ) : null}
        <form onSubmit={(e) => handleSignin(e)}>
          <div className="form_group">
            <label>E mail</label>
            <input type="text" name="email" placeholder="Email" />
          </div>
          <div className="form_group">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="form_group">
            <button> Sign in </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
