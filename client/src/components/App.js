import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Auth from "hoc/auth";

import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import About from "pages/About";
import History from "pages/History";
import Tech from "pages/Tech";
import Operation from "pages/Operation";
import Members from "pages/Members";

const App = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Auth(Home, null)} />
          <Route exact path="/login" component={Auth(Login, false)} />
          <Route exact path="/register" component={Auth(Register, false)} />
          <Route exact path="/about" component={Auth(About, null)} />
          <Route exact path="/history" component={Auth(History, null)} />
          <Route exact path="/tech" component={Auth(Tech, null)} />
          <Route exact path="/operation" component={Auth(Operation, true)} />
          <Route exact path="/member" component={Auth(Members, null)} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
