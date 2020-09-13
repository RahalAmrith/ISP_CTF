import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Login from "./Views/Login";
import Header from "./Views/Header";

// styles
import "./Styles/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact strict render={(props) => <Header {...props} />} />
        <Switch>
          <Route exact strict path="/login" render={(props) => <Login {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
