import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Auth from "hoc/auth";

import Home from "routes/Home";
import Login from "routes/Login";
import Register from "routes/Register";
import Concept from "routes/Concept";
import Progress from "routes/Progress";
import Stack from "routes/Stack";
import Operation from "routes/Operation";
import Members from "routes/Members";

const App = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Auth(Home, null)} />
          <Route exact path="/login" component={Auth(Login, false)} />
          <Route exact path="/register" component={Auth(Register, false)} />
          <Route exact path="/concept" component={Auth(Concept, null)} />
          <Route exact path="/progress" component={Auth(Progress, null)} />
          <Route exact path="/stack" component={Auth(Stack, null)} />
          <Route exact path="/operation" component={Auth(Operation, true)} />
          <Route exact path="/member" component={Auth(Members, null)} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
