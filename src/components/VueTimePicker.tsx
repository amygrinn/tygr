import React from 'react';
import Page, { PageProps } from './Page';

type VueTimePickerProps = PageProps;

export default (props: VueTimePickerProps) => (
  <Page
    {...props}
    name="Vue Time Picker!"
    path="/vue-time-picker"
    className="vue-time-picker"
  >
    <p className="description info">
      Part of a series of no-or-single dependency vue js addons
    </p>
    <p className="description">
      Despite having the word &apos;time&apos; in the name, this component is
      agnostic toward any time library or format yet easy to set up and
      customize. The clock and picker were made with svg and animated with css
      for the crispest graphics and transitions even on lower end hardware.
    </p>
  </Page>
);
