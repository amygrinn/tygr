import React, { ComponentType } from 'react';
import {
  matchPath,
  Redirect,
  RouteComponentProps,
  RouteProps,
  useLocation,
} from 'react-router-dom';
import Cronpush from './components/Cronpush';
import Home from './components/Home';
import NativescriptPluginGooglePlaces from './components/NativescriptPluginGooglePlaces';
import NotFound from './components/NotFound';
import SurgeSPAWebpackPlugin from './components/SurgeSPAWebpackPlugin';
import ThankYou from './components/ThankYou';
import VueInfiniteScroll from './components/VueInfiniteScroll';
import VuePieChart from './components/VuePieChart';
import VueTimePicker from './components/VueTimePicker';

type MyRouteProps = RouteProps & {
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
  props?: object;
};

const routes: MyRouteProps[] = [
  { path: '/', exact: true, component: Home },
  { path: '/cronpush', component: Cronpush },
  { path: '/thank-you', component: ThankYou },
  { path: '/vue-pie-chart', component: VuePieChart },
  { path: '/vue-time-picker', component: VueTimePicker },
  { path: '/vue-infinite-scroll', component: VueInfiniteScroll },
  { path: '/surge-spa-webpack-plugin', component: SurgeSPAWebpackPlugin },
  {
    path: '/nativescript-plugin-google-places',
    component: NativescriptPluginGooglePlaces,
  },
];

export default function App() {
  const location = useLocation();

  const routeIndex = routes.findIndex((r) => matchPath(location.pathname, r));

  const beforePages = [...routes];
  let afterPages: MyRouteProps[];
  let activePage: MyRouteProps;

  if (routeIndex >= 0) {
    afterPages = beforePages.splice(routeIndex);
    activePage = afterPages.shift()!;
  } else if (location.pathname === '/404') {
    afterPages = [];
    activePage = {
      component: NotFound,
    };
  } else {
    afterPages = [];
    activePage = {
      component: Redirect,
      props: {
        to: '/404',
      },
    };
  }

  return (
    <div className="router">
      {beforePages.map((p) =>
        React.createElement(p.component, {
          key: p.path,
          size: 'small',
          position: 'before',
          ...p.props,
        })
      )}
      {React.createElement(activePage.component, {
        size: 'large',
        position: 'active',
        ...activePage.props,
      })}
      {afterPages.map((p) =>
        React.createElement(p.component, {
          key: p.path,
          size: 'small',
          position: 'after',
          ...p.props,
        })
      )}
    </div>
  );
}
