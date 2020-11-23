import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/concept" component={Concept} />
          <Route exact path="/progress" component={Progress} />
          <Route exact path="/stack" component={Stack} />
          <Route exact path="/operation" component={Operation} />
          <Route exact path="/member" component={Members} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
