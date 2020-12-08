import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, option = null, admin = null, ...rest }) => {
  const { userData } = useSelector((store) => store.user);

  const AuthCheck = (Component, props, option, admin) => {
    if (!userData.isAuth) {
      if (option) {
        return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />;
      }
    } else {
      if (admin && !userData.isAdmin) {
        return <Redirect to={{ pathname: "/", state: { from: props.location } }} />;
      } else {
        if (option === false) {
          return <Redirect to={{ pathname: "/", state: { from: props.location } }} />;
        }
      }
    }
    return <Component {...props} />;
  };

  return (
    <>
      <Route {...rest} render={(props) => AuthCheck(Component, props, option, admin)} />
    </>
  );
};

export default AuthRoute;
