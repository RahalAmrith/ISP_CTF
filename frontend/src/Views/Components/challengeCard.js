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
          <p>
            {props.data.tags.map((data, i) => {
              return (
                <span key={i} className="tag">
                  {data}
                </span>
              );
            })}
          </p>
        </div>
        <div className={props.data.completed ? "points completed" : "points"}>
          <h1>
            <i
              className={props.data.completed ? "fas fa-star" : "far fa-star"}
            ></i>
            {props.data.points}
          </h1>
        </div>

        <div className="action">
          <i
            onClick={() => {
              setShowDetails((state) => {
                return !state;
              });
              setShowPassword(false);
            }}
            className={
              showDetails ? "fas fa-caret-down open" : "fas fa-caret-down"
            }
          ></i>
        </div>
      </div>

      <div className={showDetails ? "accessDetails open" : "accessDetails"}>
        <p>{props.data.description}</p>
        <div className="detailGrid">
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
          {props.data.completed ? (
            <div className="completed">
              <h1>
                <i className="far fa-check-circle"></i>Completed
              </h1>
            </div>
          ) : (
            <div className="form">
              <form>
                <div className="form_group">
                  <input
                    type="text"
                    name="password"
                    placeholder="XCTF{ Your flag here }"
                  />
                </div>
                <div className="form_group">
                  <button> Submit </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
