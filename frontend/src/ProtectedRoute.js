import React, { useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // var validator = setInterval(C_User.validateSignIn(), 1000);

  var hist = useHistory();
  const auth = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isSignedin) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
