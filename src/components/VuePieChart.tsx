import React from 'react';
import Page, { PageProps } from './Page';

type VuePieChartProps = PageProps;

export default (props: VuePieChartProps) => (
  <Page
    {...props}
    name="Vue Pie Chart!"
    path="/vue-pie-chart"
    className="vue-pie-chart"
  >
    <p className="description info">
      Part of a series of no-or-single dependency vue js addons
    </p>

    <p className="description">
      This pie chart was made with svg and animated with css for the crispest
      graphics and transitions even on lower end hardware.
    </p>
  </Page>
);
