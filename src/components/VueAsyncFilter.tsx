import React from 'react';
import Page, { PageProps } from './Page';

type VueAsyncFilterProps = PageProps;

export default (props: VueAsyncFilterProps) => (
  <Page
    {...props}
    name="Vue Async Filter!"
    path="/vue-async-filter"
    className="vue-async-filter"
  >
    <p className="description info">
      Part of a series of no-or-single dependency vue js addons
    </p>

    <p className="description">
      An experimental, yet functional, replacement for vue-rx, using template
      syntax similar to Angular&apos;s async pipe. The new syntax improves on
      vue-rx by allowing dynamically generated promises while decreasing final
      build size. The component template is responsible for launching an async
      task and displaying the result while the script simply defines stateless
      async functions.
    </p>
  </Page>
);
