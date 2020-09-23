import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cronpush from './views/Cronpush';
import Home from './views/Home';
import NativescriptPluginGooglePlaces from './views/NativescriptPluginGooglePlaces';
import NotFound from './views/NotFound';
import SurgeSPAWebpackPlugin from './views/SurgeSPAWebpackPlugin';
import ThankYou from './views/ThankYou';
import VueInfiniteScroll from './views/VueInfiniteScroll';
import VuePieChart from './views/VuePieChart';
import VueTimePicker from './views/VueTimePicker';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cronpush">
        <Cronpush />
      </Route>
      <Route path="/thank-you">
        <ThankYou />
      </Route>
      <Route path="/vue-pie-chart">
        <VuePieChart />
      </Route>
      <Route path="/vue-time-picker">
        <VueTimePicker />
      </Route>
      <Route path="/vue-infinite-scroll">
        <VueInfiniteScroll />
      </Route>
      <Route path="/surge-spa-webpack-plugin">
        <SurgeSPAWebpackPlugin />
      </Route>
      <Route path="/nativescript-plugin-google-places">
        <NativescriptPluginGooglePlaces />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);
