import React, { useState } from "react";

const ChallengeCard = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="challengeCard_Wrapper">
      <div className="info">
        <div className="index">{props.index + 1}</div>
        <div className="details">
          <h4>{props.data.name}</h4>
          <p>{props.data.description}</p>
        </div>
        <div className="points">
          <h1>
            <i className="far fa-star"></i>
            {props.data.points}
          </h1>
        </div>
        <div className="action">
          <i
            onClick={() =>
              setShowDetails((state) => {
                return !state;
              })
            }
            className={
              showDetails ? "fas fa-caret-down open" : "fas fa-caret-down"
            }
          ></i>
        </div>
      </div>

      <div className={showDetails ? "accessDetails open" : "accessDetails"}>
        <table border={0}>
          <tr>
            <td>Url :</td>
            <td>
              <a target="_blank" href={props.data.url}>
                {props.data.url}
              </a>
            </td>
          </tr>
          <tr>
            <td>Username :</td>
            <td>{props.data.username}</td>
          </tr>
          <tr>
            <td>Password :</td>
            <td>
              {showPassword ? (
                props.data.password
              ) : (
                <span onClick={() => setShowPassword(true)}>
                  Click here to show password
                </span>
              )}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ChallengeCard;
