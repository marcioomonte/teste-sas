import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CategoryList from "./pages/CategoryList";
import QuestionContent from "./pages/QuestionContent";

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/questions">
            <QuestionContent />
          </Route>
          <Route path="/">
            <CategoryList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
