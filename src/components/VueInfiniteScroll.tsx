import React from 'react';
import Page, { PageProps } from './Page';

type VueInfiniteScrollProps = PageProps;

export default (props: VueInfiniteScrollProps) => (
  <Page
    {...props}
    name="Vue Infinite Scroll!"
    path="/vue-infinite-scroll"
    className="vue-infinite-scroll"
  >
    <p className="description info">
      Part of a series of no-or-single dependency vue js addons
    </p>
    <p className="description">Zero-dependency infinite scroll component.</p>
  </Page>
);
