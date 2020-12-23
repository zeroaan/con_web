import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import AuthRoute from "pages/AuthRoute";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import About from "pages/About";
import History from "pages/History";
import Tech from "pages/Tech";
import Operation from "pages/Operation";
import Members from "pages/Members";

const Router = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <AuthRoute exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} option={false} />
          <AuthRoute exact path="/register" component={Register} option={false} />
          <AuthRoute exact path="/about" component={About} />
          <AuthRoute exact path="/history" component={History} />
          <AuthRoute exact path="/tech" component={Tech} />
          <AuthRoute exact path="/operation" component={Operation} option={true} />
          <AuthRoute exact path="/member" component={Members} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
