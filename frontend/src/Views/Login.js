import React from "react";

const Login = (props) => {
  return (
    <div className="login_wrapper appPage">
      <div className="login_container">
        <form>
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
