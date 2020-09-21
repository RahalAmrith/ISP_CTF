import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addPackage } from "../actions/Packages";

const PackageList = require("../JSON/packages.json");

const Packages = (props) => {
  const history = useHistory();
  const MyPackages = useSelector((state) => state.Packages);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [BuyCount, setBuyCount] = useState(0);

  //   functions
  const checkOwned = (id) => {
    var owned = false;
    MyPackages.map((data) => {
      if (data.id === id) {
        owned = true;
      }
    });
    return owned;
  };

  const handleBuy = (data) => {
    if (auth.isSignedin) {
      dispatch(addPackage(data));
      setBuyCount((state) => {
        return state + 1;
      });
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="appPage packages_wrapper">
      <div className="container">
        <div className="searchForm">
          <form>
            <div className="form_group">
              <input
                type="text"
                name="searcjkey"
                placeholder="Type to search"
              />
              <button> Search </button>
            </div>
          </form>
        </div>

        {/* ======================================== */}
        {/* =============== Packages =============== */}
        {/* ======================================== */}
        <div className="row">
          {PackageList.map((data, i) => {
            return (
              <div className="col-sm-4">
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
                    {checkOwned(data.id) ? (
                      <span className="owned">Owned</span>
                    ) : (
                      <button onClick={() => handleBuy(data)}>Buy Now</button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Packages;
