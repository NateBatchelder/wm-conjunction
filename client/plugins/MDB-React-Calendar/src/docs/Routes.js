import React from "react";
import { Route } from "react-router-dom";
import basicExamples from "./basic-examples";
import { BrowserRouter as Router } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={basicExamples} />
    </Router>
  );
};

export default Routes;
