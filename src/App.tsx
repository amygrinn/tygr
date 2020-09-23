import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cronpush from './views/Cronpush';
import Home from './views/Home';
import NotFound from './views/NotFound';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cronpush">
        <Cronpush />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);
