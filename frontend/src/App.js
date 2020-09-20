import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

// redux
import { useSelector, useDispatch } from "react-redux";
import { signin } from "./actions/auth";

// protectedRout
import ProtectedRoute from "./ProtectedRoute";

// Pages
import Header from "./Views/Header";
import Login from "./Views/Login";
import SignUp from "./Views/SignUp";
import Dashboard from "./Views/Dashboard";
import Package from "./Views/Package";

// styles
import "./Styles/main.scss";

function App() {
  const dispatcher = useDispatch();
  if (Cookies.get("isSignedin")) {
    const mail = Cookies.get("uM");
    dispatcher(signin(mail));
  }
  return (
    <div className="App">
      <Router>
        <Route exact strict render={(props) => <Header {...props} />} />
        <Switch>
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
