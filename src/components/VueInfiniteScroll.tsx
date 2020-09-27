import React from 'react';
import Page, { PageProps } from './Page';

type VueInfiniteScrollProps = PageProps;

export default (props: VueInfiniteScrollProps) => (
  <Page
    {...props}
    name="Vue Infinite Scroll!"
    path="/vue-infinite-scroll"
    className="vue-infinite-scroll"
  />
);
