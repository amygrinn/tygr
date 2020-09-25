import React from 'react';
import Page, { PageProps } from './Page';

type VuePieChartProps = PageProps;

export default (props: VuePieChartProps) => (
  <Page {...props} name="Vue Pie Chart!" path="/vue-pie-chart" color="brown" />
);
