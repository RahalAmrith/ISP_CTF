import React from "react";
import { Link, useHistory } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../actions/auth";

const Header = (props) => {
  const history = useHistory();
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(signout());
    history.replace("/login");
  };
  return (
    <div className="headerWrapper">
      <div className="logo">
        <h1>
          The <span>X</span> CTF
        </h1>
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/howto">
              How to
            </Link>
          </li>
          <li>
            <Link className="link" to="/packages">
              Packages
            </Link>
          </li>
          {!authState.isSignedin ? (
            <li>
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
          ) : null}
          {!authState.isSignedin ? (
            <li>
              <Link className="btnLink" to="/signup">
                Join now
              </Link>
            </li>
          ) : null}
          {authState.isSignedin ? (
            <li>
              <div className="btn-group">
                <button
                  className="btnLink dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {authState.email}
                </button>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/dashboard">
                    Dashboard
                  </Link>
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                  <Link
                    onClick={(e) => handleSignOut(e)}
                    className="dropdown-item"
                    to="/"
                  >
                    Signout
                  </Link>
                </div>
              </div>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Header;
