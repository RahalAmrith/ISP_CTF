import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
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
            <Link className="link" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="btnLink" to="/signup">
              Join now
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
