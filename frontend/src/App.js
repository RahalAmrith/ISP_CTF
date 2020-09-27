import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

// redux
import { useSelector, useDispatch } from "react-redux";
import { signin } from "./actions/auth";
import { addPackage } from "./actions/Packages";

// protectedRout
import ProtectedRoute from "./ProtectedRoute";

// Pages
import Header from "./Views/Header";
import Landing from "./Views/Landing";
import AboutUs from "./Views/AboutUs";
import Login from "./Views/Login";
import SignUp from "./Views/SignUp";
import Packages from "./Views/Packages";
import Dashboard from "./Views/Dashboard";
import Package from "./Views/Package";

// styles
import "./Styles/main.scss";

// data

const myPackages = require("./JSON/myPackages.json");

function App() {
  const dispatcher = useDispatch();
  if (Cookies.get("isSignedin")) {
    const mail = Cookies.get("uM");
    dispatcher(signin(mail));
    myPackages.map((data) => dispatcher(addPackage(data)));
  }
  return (
    <div className="App">
      <Router>
        <Route exact strict render={(props) => <Header {...props} />} />
        <Switch>
          <Route
            exact
            strict
            path="/"
            render={(props) => <Landing {...props} />}
          />
          <Route
            exact
            strict
            path="/about"
            render={(props) => <AboutUs {...props} />}
          />
          <Route
            exact
            strict
            path="/login"
            render={(props) => <Login {...props} />}
          />
          <Route
            exact
            strict
            path="/signup"
            render={(props) => <SignUp {...props} />}
          />
          <Route
            exact
            strict
            path="/packages"
            render={(props) => <Packages {...props} />}
          />
          <ProtectedRoute
            exact
            strict
            path="/dashboard"
            component={Dashboard}
          />
          <ProtectedRoute
            exact
            strict
            path="/packages/:id"
            component={Package}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
