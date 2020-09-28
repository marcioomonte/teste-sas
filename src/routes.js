import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CategoryList from './pages/CategoryList';
import QuestionContent from './pages/QuestionContent';
import ResultContent from './pages/ResultContent';

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/results'>
            <ResultContent />
          </Route>
          <Route path='/questions'>
            <QuestionContent />
          </Route>
          <Route path='/teste-sas'>
            <CategoryList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
