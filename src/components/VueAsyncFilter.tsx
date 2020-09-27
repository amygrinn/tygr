import React from 'react';
import Page, { PageProps } from './Page';

type VueAsyncFilterProps = PageProps;

export default (props: VueAsyncFilterProps) => (
  <Page
    {...props}
    name="Vue Async Filter!"
    path="/vue-async-filter"
    color="gold"
  />
);
