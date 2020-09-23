import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

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
        <Link to="/">
          <h1>
            The <span>X</span> CTF
          </h1>
        </Link>
      </div>
      <div className="nav">
        <ul>
          <li>
            <NavLink className="link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/howto">
              How to
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/packages">
              Packages
            </NavLink>
          </li>
          {!authState.isSignedin ? (
            <li>
              <NavLink className="link" to="/login">
                Login
              </NavLink>
            </li>
          ) : null}
          {!authState.isSignedin ? (
            <li>
              <NavLink className="btnLink" to="/signup">
                Join now
              </NavLink>
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
                  <NavLink className="dropdown-item" to="/dashboard">
                    Dashboard
                  </NavLink>
                  <NavLink className="dropdown-item" to="/profile">
                    Profile
                  </NavLink>
                  <NavLink
                    onClick={(e) => handleSignOut(e)}
                    className="dropdown-item"
                    to="/"
                  >
                    Signout
                  </NavLink>
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
