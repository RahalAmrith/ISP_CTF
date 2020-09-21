import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = (props) => {
  const Packages = useSelector((state) => state.Packages);
  const dispatch = useDispatch();

  return (
    <div className="appPage dashboardWrapper">
      <div className="container">
        {/* ========================================= */}
        {/* =============== Top Cards =============== */}
        {/* ========================================= */}
        <div className="row">
          <div className="col-sm-3">
            <div className="topCard">
              <i className="fas fa-box-open"></i>
              <span>
                <h1>3</h1>
                <h3>Subscribed Packages</h3>
              </span>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="topCard">
              <i className="fas fa-desktop"></i>
              <span>
                <h1>36</h1>
                <h3>Total Chanllenges</h3>
              </span>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="topCard">
              <i className="fas fa-trophy"></i>
              <span>
                <h1>13</h1>
                <h3>Completed Chanllenges</h3>
              </span>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="topCard">
              <i className="far fa-star"></i>
              <span>
                <h1>220</h1>
                <h3>Total Points</h3>
              </span>
            </div>
          </div>
        </div>

        {/* =========================================== */}
        {/* =============== My Packages =============== */}
        {/* =========================================== */}
        <div className="sectionTitle">
          <h1>My Packages</h1>
          <hr />
        </div>

        {Packages.map((data, i) => {
          return (
            <div className="packageCard">
              <img alt={data.name} src={data.image} />
              <div className="info">
                <h3>{data.name}</h3>
                <p>{data.description}</p>
                <p className="metaData">
                  <span className="item">
                    <span className="key">Last Update : </span>{" "}
                    {data.lastUpdate}
                  </span>
                  <span className="item">
                    <span className="key">subscriptions : </span>{" "}
                    {data.subscriptions}
                  </span>
                </p>
              </div>
              <div className="action">
                <span className="completeStatus">
                  {data.challenges_completed}&nbsp;/&nbsp;
                  {data.challenges_total}
                </span>
                <Link to={`/packages/${data.id}`}>View Challenges</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
